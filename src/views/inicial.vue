<template>
    <div>
        <div>
        <Menu/>

        </div>
        <Cards/>
    </div>
</template>

<script>
import Menu from "../components/Menu.vue"
import Cards from "../components/Cards.vue"
export default {
  name: 'menu',
components:{
  Menu,Cards
},
}
</script>

<style scoped>

</style>