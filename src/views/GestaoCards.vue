<template>
  <div>
    <header>
      <Menu/>
    </header>
    <div>
      <Escolhascards/>
    </div>
  
  </div>

</template>

<script>
import Menu from "../components/MenuUsuario.vue";
import Escolhascards from "../components/EscolhasCards.vue";

export default {
  name: "MenuUsuario",
  components: {
    Menu,Escolhascards
  },
  methods: {},
};
</script>

