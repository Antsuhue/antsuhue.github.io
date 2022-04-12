<template>
    <div>
        <nav>
            <img src="../assets/logo.png" width="235">
        </nav>
        <h1>E-mail Enviado! <i class="far fa-smile"></i> </h1>
        <h2>Olá, uma mensagem foi enviada para seu email</h2>
        <h2>verifique sua caixa postal!</h2>
        <h2>click no botão a baixo para volta para pagina inicial.</h2>

        <button v-on:click="Home">Voltar</button>
    </div>
</template>

<script>

export default {
    methods:{
        Home(){
            this.$router.push({path:"/"})
        }
    }
}
</script>

<style  scoped>

nav{
    margin-top: 40px
}
h1{
    margin: 7% 27% 0px 27%;
    background: #ff8560;
    border-radius: 5px;
    padding: 20px;
    font-size: 28px;
    font-family:  Arial, sans-serif;
    color:white;
}

h2{
    margin: 50px 0px 0px 0px;
    font-family:  Arial, sans-serif;

}

button{
    border:none;
    outline: none;
    background: rgb(46, 167, 22);
    color:white;
    font-size: 22px;
    font-family:  Arial, sans-serif;
    cursor:pointer;
    border-radius:3px;
    margin-top : 30px;
    padding: 7px;
    margin-left: 18px;
    width: 140px;

}

button:hover{
    background: rgb(51, 134, 32);
}
</style>