<template>
    <div>
        <nav class="navbar">
           
            <div class="logo">
                <h1><img src="../assets/logo.png" width="100"></h1>
            </div>
           
            <button class="hamburguer-button">&#9776;</button>
           
            <ul>

                <li>
                    <p v-on:click="index" >Inicial <i class="fas fa-house-user"></i></p>
                </li>

                <li>
                    <p v-on:click="gestaocards" > Cards <i class="fas fa-clone"></i></p>
                </li>

                <li>
                    <p v-on:click="logOut" >Sair <i class="fas fa-unlock-alt"></i></p>
                </li>

            </ul>
        </nav>
    </div>
</template>
<script>
const axios = require("axios")
export default {
    data(){
        return{

        }
    },

    methods:{
        gestaocards(){
            this.$router.push({ path:"managementcards" })
        },
        index(){
            this.$router.push({ path:"index" })
        },
        async logOut(){
            await axios.post("http://localhost:4000/logout")
            this.$router.push({ path:"/" })
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

div{
    margin: -9px
}



ul{
    list-style: none;
    padding: 0;
    transition:all 0.5s;
    overflow:hidden;

}

.navbar{
    background: #ff8560;
    padding:0px;
    justify-content: space-between;
    align-items: center;
    box-shadow: 10px 5px 5px 4px #f8ab94;
    border-radius:2px 4px 4px 10px

}

p{
    color:white;
}

.navbar, ul {
    display:flex;
    flex-direction: row;
}
li{
    padding: 0 20px;
}
h1{
    margin:0;
    padding: 20px;
}

.hamburguer-button{
    background-color: transparent;
    border:none;
    color:#fff;
    font-size:40px;
    position: absolute;
    right:15px;
    top:10px;
    display:none;
}

li:hover,
.hamburguer-button:hover
{
    cursor:pointer;
}

.hamburguer-button:focus ~ ul{
    height: 200px;

}



@media (max-width:700px){

    .navbar,ul{
        flex-direction: column;
    }

    ul{
        text-align: center;
        margin:0;
        height: 0;
    }

    .navbar{
        padding:0;
        border-radius: 10px 0px 0px 10px;
    }

    h1{
        margin:center
    
    }

    .hamburguer-button{
        display: flex;
        margin-top: 4px;
    
    }

    li{
        width: 100%;
    
    }


}


</style>