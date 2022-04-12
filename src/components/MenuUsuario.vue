<template>
    <input type="checkbox" id="check">
    <label for="check">
      
        <div class="menu" >
            <span class="hamburguer"></span>

        </div>
    </label>

    <div class="barra">

        <div class="logo">
                <h1><img src="../assets/KipiaiBranco.png" width="100"></h1>
        </div>

        <div>

            <li class="itemB" v-on:click="goToIndex">
                <p class="item" >Inicial <i class="fas fa-house-user"></i></p>
            </li>
            <li v-on:click="goToCards">
                <p class="item"  >Cards <i class="fas fa-tasks"></i></p>
            </li>

            <li v-on:click="logOut">
                <p class="item"  >Sair <i class="fas fa-unlock-alt"></i></p>     
            </li>
        </div>

    </div>


</template>

<script>
import api from '../services/api'
export default {
methods:{
    goToIndex(){
        this.$router.push("/dashboard")
        },
    goToCards(){
        this.$router.push("/managementcards")
        },
    async logOut(){
            await api.post("http://localhost:4000/logout")
            this.$router.push({ path:"/" }) 
            localStorage.clear("kipiai-token")
            console.log("click")
        }
    }
}
</script>

<style scoped>
.menu {
    background: white;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    position: fixed;
    top: 0px;
    left: 5px;
    z-index: 1;
}

.hamburguer {
    position: relative;
    display: block;
    background: #000;
    width: 30px;
    height: 2px;
    top: 29px;
    left: 15px;
    transition: 0.5s ease-in-out;
}

.hamburguer:before,
.hamburguer:after {
    background: #000;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.5s ease-in-out;
}

.hamburguer:before {
    top: -10px;
}

.hamburguer:after {
    bottom: -10px;
}

input {
    display: none;
}

input:checked~label .hamburguer {
    transform: rotate(45deg);
}

input:checked~label .hamburguer:before {
    transform: rotate(90deg);
    top: 0;
}

input:checked~label .hamburguer:after {
    transform: rotate(90deg);
    bottom: 0;
}


.barra {
    background-color: #333;
    height: 80%;
    width: 160px;
    position: fixed;
    transition: all .2s linear;
    left: -300px;
    border-radius: 0px 12px 12px 0px;

}

#check:checked~.barra {
    transform: translateX(300px);
}

i {
    margin-left: 3%;
}

.logo{
    margin-top: 50px;

}

.item {
    display:flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
    cursor: pointer;
    width: auto;
    height: 50px;
    background-color: #9999;
    color:white;
    border-radius: 3px;
}

.itemB {
    margin-top: -5%;

}


.teste{
  background-color:#9999 ;

}

</style>