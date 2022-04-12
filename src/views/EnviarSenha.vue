<template>
  <div>
    <div class="row">
      <div class="card">
          <img src="../assets/logo.png">

        <p>Informe Seu E-mail ou seu login cadastrado:</p>

        <label class="label-input" for="">
        <input v-model="access" type="text" placeholder="Email ou login">
        </label>

        <button v-on:click="sendEmail" class="button">Enviar</button>
        <nav>
        <br>
        <a style="cursor:pointer" v-on:click="Home" >Voltar</a>
        </nav>
       </div>
    </div>
</div>
</template>
<script>
import api from "../services/api"
export default {
  data(){
    return{
      access: ""
    }
  },
  methods:{
      async sendEmail(){
        try{
        console.log("click");
        const access = { access: this.access}
        const send = await api.post("/forgot_password", access)
        console.log("email enviado", send);
        //Adicionar abaixo redirecionamento para confimação de mensagem enviada
        this.$router.push("/requestEmail")
        }
        catch(err){
          console.log(err);
        }
      },
      Home(){
      this.$router.push("/")
  }
}
}
</script>

<style scoped>

.row {
  display: flex; 
  margin-top:10%; 
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  border-radius: 10px;
  box-shadow: 7px 7px 13px 10px rgba(50, 50, 50, 0.22);
  width: 380px;
  height: 390px;
  transition: all 0.3s ease-out;
}
 
.card p {
  color: #a3a5ae;
  font-size: 14px;
  margin-top: 30px;
}

a{
  font-style:  italic;
  font-size: 14px;
  color: rgb(131, 131, 131);
}

img{
    width:100px;
    margin-top:40px;
}

input {
  margin-top:30px;
  height: 45px;width: 70%;
  border: 0;
  border-bottom: 2px solid #9e9e9e;
  outline: none;

}

.label-input {  
    justify-content: center;
    display: flex;
    align-items: center;
}


button {
background: rgba(248, 116, 76, 0.753);
color: #fff;
border: 1px solid #eee;
border-radius: 20px;
box-shadow: 5px 5px 5px #eee;
text-shadow:none;
width: 180px;
padding:12px;
margin-top: 70px;
}

button:hover {

background: #f77d59;
color: #fff;
border: 1px solid #eee;
border-radius: 20px;
box-shadow: 5px 5px 5px #eee;
text-shadow:none;

}


</style>