const axios = require("axios");
const bcrypt = require("bcrypt");
const modelUser = require("../model/user");
const { emailConfirmation } = require("./access");
const { logsAccess } = require("./logsGenerate");
const {
  logsCreateUser,
  logsApproved,
  logsDisapproved,
  logEmail,
} = require("./logsSlack");
require("dotenv");

// Função para listar usuários que acessam a plataforma.
async function listUsers(req, res) {
  const users = await modelUser.find();

  let listUsers = [];

//Criando a estrutura dos dados que serão exibidos de cada usuário.
  users.forEach((usr) => {
    let usrObject = {
      name: usr.name,
      userName: usr.userName,
      email: usr.email,
      approved: usr.approved,
      emailConfirmed: usr.emailConfirmed,
    };
    listUsers.push(usrObject);
  });

  return res.status(200).json(listUsers);
}

// Função para criação de cada usuário
async function createUsers(req, res) {
  let { userName, name, email, pass } = req.body;

  userName = userName.toLowerCase();

  //Verificar se os campos estão vazios
  try {
    if (
      userName.trim() == "" ||
      name.trim() == "" ||
      email.trim() == "" ||
      pass.trim() == ""
    ) {
      return res.status(400).json({ status: "Campos não preenchidos" });
    }

    const user = await modelUser.findOne({ userName: userName });

    // Verificar se o usuário já existe.
    if (user) {
      return res.status(400).json({ status: "User alredy exist!" });
    }

    // Criando senha hasheada para o usuário.
    const salt = bcrypt.genSaltSync(parseInt(process.env.SALT));
    const hash = bcrypt.hashSync(pass, salt);

    // Modelo de dados para cada usuário criado
    var createUser = new modelUser({
      name: name.toLowerCase(),
      userName: userName,
      email: email.toLowerCase(),
      pass: hash,
      approved: false,
      emailConfirmed: false,
    });

    const doc = await createUser.save();

    // Função de disparo de confirmação de e-mail
    try{
    await emailConfirmation(doc._id, doc.email);
    console.log("function",await emailConfirmation)
    console.log(doc)
    }
    catch(e){
      console.log(e)
    }
    //Gerando log de criação de usuário
    logsAccess(doc.userName, `Usuário ${doc.userName} foi criado`, "info");

    //Gerando log de criação de usuário via slack
    await logsCreateUser("Usuario Criado com sucesso!");

    return res.status(200).json({ doc });
  } catch (error) {
    console.log(error);
    return res
      .status(501)
      .json({ status: "Failed to create a user try again!" });
  }
}

// Função para localizer um usuário em especifico apartir do nome de usuário
async function findUser(req, res) {
  const userName = req.body.userName;

  const user = await modelUser.findOne({ userName: userName });

  if (!user) {
    return res.status(404).json({ status: "Usuario não encontrado" });
  }

  // estrutura dos dados que são retornados após a consulta realizada
  resp = {
    id: user._id,
    name: user.name,
    userName: user.userName,
    email: user.email,
  };

  return res.status(200).json({ response: resp });
}

//Função de deleção de um usuário
async function deleteUser(req, res) {
  const { id } = req.body;
  console.log("params ->", id);

  await modelUser.findByIdAndRemove(id);
}

//Funcão de alterar e-mail de usuário
async function editUserEmail(req, res) {
  const { id } = req.query;
  const { email } = req.body;

  const user = await modelUser.findById(id);
  const existEmail = await modelUser.findOne({ email: email });

  try {
    if (!user) {
      return res.status(404).json({ status: "Usuario não existe!" });
    }

    if (existEmail) {
      return res
        .status(400)
        .json({ status: "E-mail em uso por outro usuário!" });
    }

    const updateObject = {
      email: email,
      approved: false,
    };

    await modelUser.findByIdAndUpdate(id, updateObject, async (err, res) => {
      if (err) {
        return res
          .status(500)
          .json({ status: "Erro ao alterar o email de usuário!" });
      }
    });

    //Gerar log de alteração de de e-mail
    logsAccess(
      user.userName,
      `${user.userName}'s e-mail has change to ${email}`,
      "info"
    );
    //Gerar log de alteração de de e-mail via Slack
    await logEmail(`${user.userName}'s e-mail has change to ${email}`);
    return res
      .status(200)
      .json(
        "E-mail alerado para com sucesso!, por favor verifique a caixa postal para relizar a confirmação de e-mail!"
      );
  } catch (err) {
    console.log(err);
  }
}

//Alterar permissão
function changePermission(req, res) {
  const { action, userName } = req.body;

  console.log(req.headers["authorization"]);

  switch (action) {
    case "approve":
      approveUser(userName, res);
      break;

    case "disapprove":
      disapproveUser(userName, res);
      break;
  }
}

// Usuario master terá a possibilidade de aprovar usuario no uso da plataforma.

async function approveUser(userName, res) {
  const user = await modelUser.findOne({ userName: userName });

  // Verificação se usuario existe.
  if (!user) {
    return res.status(404).json({ status: "Usuario não encontrado!" });
  }

  // Alterar aprovação do usuario na base de dados.
  try {
    await modelUser.findByIdAndUpdate(user._id, {
      $set: {
        approved: true,
      },
    });
    await logsApproved(
      `${user.userName} has change your status to aproved`,
      "info"
    );
    return res.status(200).json({ status: "Sucess to approve user!" });
  } catch (err) {
    return res.status(400).json({ status: `Error to aprove user, ${err}` });
  }
}

async function disapproveUser(userName, res) {
  const user = await modelUser.findOne({ userName: userName });

  // Verificação se usuario existe.
  if (!user) {
    return res.status(404).json({ status: "Usuario não encontrado!" });
  }

  // Alterar aprovação do usuario na base de dados.
  try {
    await modelUser.findByIdAndUpdate(user._id, {
      $set: {
        approved: false,
      },
    });
    await logsDisapproved(
      `${user.userName} has change your status to disapproved`,
      "info"
    );
    return res.status(200).json({ status: "Sucess to disapprove user!" });
  } catch (err) {
    return res.status(400).json({ status: `Error to disaprove user, ${err}` });
  }
}

module.exports = {
  createUsers,
  findUser,
  deleteUser,
  changePermission,
  listUsers,
  editUserEmail,
};
