<template>
  <div class="container">
    <nav>
      <img src="../assets/logo.png" width="235">
    </nav>
    <h2>Ops! Página não encontrada.</h2>
    <h1>404</h1>
    <p>Não posso achar a página que você está procurando.</p>
    <a v-on:click="home" style="cursor: pointer">Volte para o inicio</a>
  </div>
</template>


<script>
export default {

    methods:{
        home(){
            this.$router.push({path:"/"})
        }
    }
}
</script>

<style scoped>
.container {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  color: #343434;
}
.container h1 {
  font-size: 180px;
  margin: 0;
  font-weight: 900;
  letter-spacing: 22px;
}

h2,p{
  font-size: 32px;
}

.container a {
  text-decoration: none;
  background: #e55039aa;
  color: #fff;
  padding: 12px 24px;
  display: inline-block;
  border-radius: 25px;
  font-size: 14px;
  text-transform: uppercase;
  transition: 0.4s;
}
.container a:hover {
  background: #e55039;
}

img{
  margin: 0px 0px 80px 0px;
}
</style>