<template>
  <div>
      <header>
        <Menu/>
      </header>
    <div>
      <ConfigUser/>
    </div>
  </div>
        
</template>

<script>
import Menu from "../components/Menu.vue"
import ConfigUser from "../components/ConfigUser.vue"

export default {
  name: 'menu',
components:{
Menu,ConfigUser
},
}
</script>