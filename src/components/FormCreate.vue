<template>
<div>
    <div id="erro" :class="{erro:errorActive}">
            <p v-if="errorActive">{{msgErro}}</p>
    </div>
    
    <div>
        <form class="form" v-on:submit.prevent="teste" >
        <nav>
            <label class="label-input" for="">
                    <input v-model="userName" type="text" placeholder="UserName">
            </label>

            <label class="label-input" for="">
                    <input v-model="name" type="text" placeholder="Name">
            </label>
        </nav>
        <nav>

            <label class="label-input" for="">
                    <input v-model="pass" type="password" placeholder="Password">
            </label>   

            <label class="label-input" for="">
                <input v-model="rePass" type="password" placeholder="Confirm password">
            </label>
        </nav>

            <label class="label-input" for="">
                <input v-model="email" type="email" placeholder="Email">
            </label>  
                   
            <button  class="btn btn-second">Enviar</button> 
        </form>
    </div>
</div>

</template>
<script>
const axios = require("axios")
export default {
    data(){
    return {
        userName: "",
        name:"",
        email:"",
        pass:"",
        rePass:"",
        errorActive: false,
        msgErro: ""
    }
},
    methods:{
        async teste() {
            const form = {
                    userName: this.userName,
                    name: this.name,
                    email: this.email,
                    pass: this.pass,
                }
            try{
                await axios.post("http://localhost:4000/create_user", form)
                this.$router.push({ path:"/" })
            }
            catch(err){
                this.errorActive = true
                this.msgErro = err.response.data.status
                console.log(err.response.data);
            }
        }
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap');

#erro{
    color:red;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;    
}

.form {
    display: flex;
    flex-direction: column;
    width: 100%;
}


.form input {
 
    border: none;
    background-color: #ecf0f1;
    justify-content: flex-start;
    height: 40px;

}
nav input{
    margin-top: 10px;
}

.label-input {
    margin: 8px;
}

input:-webkit-autofill 
{
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
    transition: background-color .5s;
}
.btn-second:hover {
    background-color: #fff;
    border: 1px solid #ff8560;
    color: #ff8560;
}

@media screen and (max-width: 1040px) {

    .form {
        width: 90%;
    }
    
}


</style>