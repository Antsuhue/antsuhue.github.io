<template>
    <div class="container">
    <div class="content">

        <header>Nome</header>
        <header>E-mail </header>
        <header>Status</header>
        <header>Opções</header>

    <ul class="todoList">
        <div v-for="(item, index) in this.itens.data" v-bind:key="index">
            <input type="text" name="Nome" :value="item.name" readonly />
            <input type="text" name="E-mail" :value="item.email" readonly />
            <button id="status" v-if="item.approved == true" class="status">Aceito</button>
            <button id="status" v-else class="status">Recusado</button>
            <button v-on:click="approve(item.userName)" class="buttonYes"><i class="fas fa-check"></i></button>
            <button v-on:click="disapprove(item.userName)" class="buttonNo"><i class="fas fa-times"></i></button>
            <button v-on:click="configUser(item.userName)" class="buttonNo"><i class="fas fa-user-cog"></i></button>
        </div>
    </ul>

    <div>
        <button class="buttonConectar">Cadastrar Todos</button>
        <button class="buttonApagar">Recusar Todos</button>
    </div>

    </div>
    </div>
</template>
<script>
import api from "../services/api"
export default {
    methods: {
        async approve(name){
            console.log(name);
            const approveUser = {
                action: "approve",
                userName: name
            }
            this.$router.go("settings")
            await api.post("/change_permission/", approveUser)
        },
        async disapprove(name){
            console.log(name);
            const disapproveUser = {
                action: "disapprove",
                userName: name
            }
            this.$router.go("settings")
            await api.post("/change_permission/", disapproveUser)
        },
        configUser(userName){
            console.log(userName)
            this.$router.push({
                path:"edituser",
                query:{
                    userName:userName
                }
                })
        }
    },

    async created(){
        this.itens = await api.get("/list_users")
    },
    data(){
        return{
            itens : ""
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap');

|*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}

.content {
    border-radius: 15px;
    width: 1100px;
  box-shadow: 7px 7px 13px 9px rgba(50, 50, 50, 0.22);
    padding: 50px;
    border-left: 5px solid #90d6e9ea;


}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:4%;

}
 header{
    font-size: 20px;
    display: inline;
    margin-left: 170px;
    color: black;

}

.content .todoList{
    max-height: 400px;
    overflow: auto;

}
.todoList{
        margin-left: 80px;

}
input {
    list-style: none;
    line-height: 22px;
    margin-bottom: 8px;
    margin-right: 57px;
    cursor: default;
    border: 0;
    border-bottom: 1px solid #000000;
    
}
.status{
    color: white;
    width: 70px;
    padding: 5px;
    text-align: center;
    background: #909091ea;
    cursor:default;
    border-radius: 3px;
    border:none;
    margin-left:35px;
    
}
 .buttonYes{
    color: white;
    width: 45px;
    padding: 5px;
    text-align: center;
    background: #90d6e9ea;
    cursor:pointer;
    border-radius: 3px;
    border:none;
    margin-left:130px;
    margin-right:7px;}


 .buttonNo{
    color: white;
    width: 45px;
    padding: 5px;
    text-align: center;
    background: rgb(236, 90, 90);
    cursor:pointer;
    border-radius: 3px;
    border:none;
    margin-right:7px;
}

.buttonApagar{
    border:none;
    outline: none;
    background: rgb(236, 90, 90);
    color:white;
    font-size: 22px;
    cursor:pointer;
    border-radius:3px;
    margin-top : 20px;
    padding: 6px 10px;
    margin-left: 30px
}

.buttonConectar{
    border:none;
    outline: none;
    background: rgb(46, 167, 22);
    color:white;
    font-size: 22px;
    cursor:pointer;
    border-radius:3px;
    margin-top : 20px;
    padding: 6px 10px;
    margin-left: 15px
}

.buttonYes:hover
{
    background-color:rgb(15, 116, 248);
}
.buttonNo:hover, .buttonApagar:hover
{
    background-color:red;
}

.buttonConectar:hover
{
    background-color:green;
}

@media (max-width:1220px){
.content{
max-width: 440px;
min-width: 330px;
}

.status{
margin-left: -13px;
}

 .buttonYes{
     margin-left: 3px
 }
header{
    color:white;
    display: none;
}
}


</style>