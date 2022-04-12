<template >
      <div class="container">
        <div class="content first-content">
            <div class="first-column">
                <figure>
                    <img src="../assets/logo.png" width="200">
                </figure>
                <h2 class="title title-primary">Bem-Vindo!</h2>
                <p class="description description-primary">por favor faça o cadastro com suas  informações.</p>
                <button id="signin" v-on:click="registerUser" class="btn btn-primary">Cadastrar</button>
            </div>
            <div class="second-column">
                <h2 class="title title-second">Conectar</h2>
                <br>
                <p class="description description-second">Use seu nome de usuário para conectar:</p>
                <Form-login/>
            </div><!-- segunda coluna -->
        </div><!-- primeiro conteúdo-->
      </div>
</template>

<script>
import FormLogin from "../components/FormLogin.vue"
export default {
  name: 'Login',
components:{
  FormLogin
},
methods:{
    registerUser: function(){
        this.$router.push({ path:"create" })
    }
    
}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    font-family: 'Open Sans', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #d7edf3ea;

}
.content {
    background-color: #fff;
    border-radius: 15px;
    width: 960px;
    height: 50%;
    justify-content: space-between;
    align-items: center;
    position: relative;
  
}
.content::before {
    content: "";
    position: absolute;
    background-color: #ff8560;
    width: 40%;
    height: 100%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    left: 0;

}
.title {
    font-size: 28px;
    font-weight: bold;
    text-transform: capitalize;
}
.title-primary {
    color: #fff;
}
.title-second {
    color: #ff8560;
}
.description {
    font-size: 14px;
    font-weight: 300;
    line-height: 30px;
}
.description-primary {
    color: #fff;
}
.description-second {
    color: #7f8c8d;
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
.btn-primary {
    background-color: transparent;
    border: 1px solid #fff;
    transition: background-color .5s;
}
.btn-primary:hover {
    background-color: #fff;
    color: #ff8560;
}

.first-content {
    display: flex;
}
.first-column {
    text-align: center;
    width: 40%;
    z-index: 10;
}
.second-column {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.social-media {
    margin: 1rem 0;
}

/*VERSÃO MOBILE*/
@media screen and (max-width: 1040px) {
    .content {
        width: 100%;
        height: 100%;
    }

    .content::before {
        width: 100%;
        height: 40%;
        top: 0;
        border-radius: 0px;
    }
    .first-content, .second-content {
        flex-direction: column;
        justify-content: space-around;
    }

    .first-column, .second-column {
        width: 100%;
    }
    /* ANIMAÇÃO MOBILE CSS*/

    @keyframes deslocamentoEsq {

        from {
            top: 0;
            opacity: 1;
            z-index: 12;
        }
    
        25% {
            top: -80px;
            opacity: .5;
        }
    
        50% {
            top: -100px;
            opacity: .2;
        }
    
        to {
            top: -110px;
            opacity: 0;
            z-index: -1;
        }
    }
    
    
    @keyframes deslocamentoDir {
    
        from {
            top: 0;
            z-index: 12;
        }
    
        25% {
            top: 80px;
        }
    
        50% {
            top: 100px;

        }
    
        to {
            top: 110px;
            z-index: -1;
        }
    }
    
    
    
    @keyframes slidein {
    
        from {
            top: 0;
            height: 40%;
        }
    
        25% {
            top: 5%;
            height: 50%;
        }
    
        50% {
            top: 25%;
            height: 60%;
        }
    
        75% {
            top: 45%;
            height: 50%;
        }
    
        to {
            top: 60%;
            height: 40%;
        }
    }
    
    @keyframes slideout {
    
        from {
            top: 60%;
            height: 40%;
        }
    
        25% {
            top: 45%;
            height: 50%;
        }
    
        50% {
            top: 25%;
            height: 60%;
        }
    
        75% {
            top: 5%;
            height: 50%;
        }
    
        to {
            top: 0;
            height: 40%;
        }
    }
   
}


</style>