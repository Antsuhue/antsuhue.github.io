<template>
<div>
  <div id="erro" :class="{ erro: errorActive }">
    <p v-if="errorActive">{{ msgErro }}</p>
  </div>
  <div>
    <form class="form" v-on:submit.prevent="login">
      <div>
        <label class="label-input" for="">
          <input type="text" v-model="userName" placeholder="Username" />
        </label>
        <label class="label-input" for="">
          <input type="password" v-model="pass" placeholder="Password" />
        </label>
        <button class="btn btn-second">Entrar</button>
      </div>
      <a style="cursor: pointer" v-on:click="forgotPass">Esqueceu a Senha</a>
    </form>
  </div>
</div>
</template>
<script>
import api from "../services/api"

export default {
  data() {
    return {
      errorActive: false,
      userName: "",
      pass: "",
      msgErro: "",
    };
  },

  methods: {
    async login() {
      const dataAccess = {
        userName: this.userName.trim(),
        pass: this.pass,
      };
      try {
        const response = await api.post("/login", dataAccess);
        console.log(response)
        localStorage.setItem("kipiai-token", response.data.token)
        this.$router.push({ path: "dashboard" }); 
      } catch (err) {
        this.errorActive = true;
        this.msgErro = err.response.data.status;
        console.log("error");
      }
    },
    forgotPass() {
      this.$router.push("sendpassword");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap");

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.form input {
  height: 45px;
  width: 100%;
  border: none;
  background-color: #ecf0f1;
}

.label-input {
  background-color: #ecf0f1;
  display: flex;
  align-items: center;
  margin: 8px;
}

input:-webkit-autofill {
  -webkit-text-fill-color: #000 !important;
}

.btn {
  border-radius: 15px;
  text-transform: uppercase;
  color: #fff;
  font-size: 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  width: 150px;
  align-self: center;
  border: none;
  margin-top: 1rem;
}

.btn-second {
  background-color: #ff8560;
  border: 1px solid #ff8560;
  transition: background-color 0.5s;
}

.btn-second:hover {
  background-color: #fff;
  border: 1px solid #ff8560;
  color: #ff8560;
}

a {
  margin-top: 15px;
  font-style: italic;
  font-size: 14px;
  color: rgb(131, 131, 131);
}

#erro {
  color: red;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}

@media screen and (max-width: 1040px) {
  .form {
    width: 90%;
  }
}
</style>