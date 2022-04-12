<template>
  <div>
    <div class="row">
      <div class="card">
        <h2>Redefinir Senha</h2>
        <p>Informe sua nova senha a baixo:</p>
        <div id="erro" :class="{erro:errorActive}">
            <p v-if="errorActive">{{msgErro}}</p>
        </div>
        <label class="label-input" for="">
        <input v-model="pass" type="password" placeholder="Password">
            </label>   

        <label class="label-input" for="">
            <input v-model="rePass" type="password" placeholder="Confirm password">
        </label>

            <button v-on:click="changePass" class="button">Alterar</button>
       </div>
    </div>
</div>
</template>
<script>
import api from "../services/api"
export default {

  methods: {
    async changePass(){

      try{
      const token = this.$route.query.token
      console.log("testes");

      if (this.pass != this.rePass){
        this.pass = ""
        this.rePass = ""
        this.errorActive = true
        this.msgErro = "As senhas digitadas não coincidem!"
        return "Senhas não confeerem"
      }

      await api.post(`/change_password/?token=${token}`,{pass:this.pass})
      console.log("alterado");
      this.pass = ""
      this.rePass = ""

      this.$router.push("/changeConfirmation")

      }
      catch(err){
        console.log(err);
      }


    }
  },
  data(){
    return{
      pass:"",
      rePass: "",
      msgErro:"",
      errorActive:false
    }
  }

}
</script>

<style scoped>


p{
  color: red;
}

#erro{
    color:red;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
} 

.row {
  display: flex; 
  margin-top:10%; 
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  border-radius: 10px;
  box-shadow: 7px 7px 13px 10px rgba(50, 50, 50, 0.22);
  width: 400px;
  height: 400px;
  transition: all 0.3s ease-out;
}
 
.card p {
  color: #a3a5ae;
  font-size: 14px;
}

input {
  margin-top:40px;
  height: 45px;width: 70%;
  border: 0;
  border-bottom: 2px solid #9e9e9e;
  outline: none;

}

.label-input {  
    justify-content: center;
    display: flex;
    align-items: center;
    margin: 8px;
}


button {
background: rgba(248, 116, 76, 0.753);
color: #fff;
border: 1px solid #eee;
border-radius: 20px;
box-shadow: 5px 5px 5px #eee;
text-shadow:none;
width: 110px;
padding:12px;
margin-top: 20px;
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