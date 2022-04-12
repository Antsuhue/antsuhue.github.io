<template>
   <div>
    <div class="row">
      <div class="card">

        <img class="image" src="../assets/pontos.png" alt="money" />

        <h2>Cadastro</h2>
        <label for="fname">Nome:</label><br>
        <input type="text" id="Nome" v-model="nome" name="Nome" disabled><br>
        
        <label for="fname">Usuario:</label><br>
        <input type="text" id="Usuario" name="Usuario" v-model="userName"  disabled/><br>

        <label for="fname">E-mail:</label><br>
        <input type="text" id="Email" name="Email" v-model="email" disabled><br>
      </div>

       <div class="card">
        <img class="image" src="../assets/pontos.png" alt="money" />
        <h2>Ações</h2>
        <p v-on:click="showModal">Excluir</p>
        <p v-on:click="showModalAlter">Alterar dados</p>
        <p>Enviar E-mail</p>
      </div>
      <Modal
      v-show="isModalVisible"
      @close="closeModal"
      :userName="userName"
      :id="id"
    />
      <ModalAlerarUsuario
      v-show="isModalAlterVisible"
      @close="closeModalAlter"
      :name="nome"
      :email="this.email"
      />

        <div class="cardbig">

        <img class="image" src="../assets/pontos.png" alt="money" />
        <h2>Gestão dos Cards</h2>
          <div class="todolist">
      <header>Empresa <button class="trash" ><i class="fas fa-trash"></i></button> <button class="block"><i class="fas fa-ban"></i></button>  </header>
   
      </div>
      </div>

      </div>
    </div>
</template>
<script>
import api from "../services/api"
import Modal from "../components/Modal.vue"
import ModalAlerarUsuario from "../components/ModalAlterarUsuario.vue"
export default {
  components:{
    Modal,
    ModalAlerarUsuario
  },
  methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },

      showModalAlter() {
        this.isModalAlterVisible = true;
      },
      closeModalAlter() {
        this.isModalAlterVisible = false;
      }
    },
  async created(){
    const params = await this.$route.query.userName
    try{
    const resp = await api.post("/find_user", {userName:params})
    this.userInfo = resp.data.response
    this.id = this.userInfo.id
    this.nome = this.userInfo.name
    this.userName = this.userInfo.userName
    this.email = this.userInfo.email

    console.log("User info ->",this.id)
    }catch(err){
      console.log(err);
    }
  },

  data(){
    return {
      userInfo:"",
      nome:"",
      userName:"",
      email:"",
      id:"",
      isModalVisible: false,
      isModalAlterVisible: false
    }
  }

}
</script>


<style scoped>

.row {
  margin-top: 60px;
  margin-left: 80px;
  display: flex;  
  flex-wrap: wrap;

}
.card {
  border-radius: 5px;
  box-shadow: 7px 7px 13px 10px rgba(50, 50, 50, 0.22);
  padding: 30px;
  max-width: 300px;
  min-width: 250px;
  height: 250px;
  margin: 27px;

}
.cardbig{
  border-radius: 5px;
  box-shadow: 7px 7px 13px 10px rgba(50, 50, 50, 0.22);
  padding: 30px;
  max-width: 250px;
  min-width: 250px;
  min-height: 450px;
  margin: 27px;
}

.cardbig .todolist{
    max-height: 400px;
    overflow: auto;

}
  .image{
  width: 50px;
  margin-right: 100%;
}

.card p {
  color: #a3a5ae;
  font-size: 16px;
  cursor:pointer;
  margin-top: 30px;


}
label{
  color: #a3a5ae;
  font-size: 16px;
  margin-right: 64%;
}


input{
    list-style: none;
    line-height: 25px;
    position: relative;
    margin-bottom: 8px;
    border: 0;
    width: 80%;
    border-bottom: 1px solid #000000;

}

header{
  color: #7d7e81;
  font-size: 16px;
  margin-left: -45%;
  margin-bottom: 15px;
}

.trash{
  border:none;
  color: rgb(235, 72, 72);
  cursor: pointer;
  background: white;
  font-size: 16px;
}

.block{
  border:none;
  color: rgb(0, 0, 0);
  cursor: pointer;
  background: white;
  font-size: 16px;
}
</style>