<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Informações do usuário.
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="close"
        >
          x
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
            <span class="titleForm">Nome: </span><input class="inputForm" :value="this.name" type="text">
            <br>
            <span class="titleForm">E-mail: </span><input class="inputForm" :value="this.email" type="text">
            <br>
        </slot>
       </section>

      <footer class="modal-footer">
        <slot name="footer">
        </slot>
        <button
          type="button"
          class="btn-green-no"
          @click="close"
        >
          Cancelar
        </button>
        <button
          type="button"
          class="btn-green-yes"
          @click="deleteUser"
        >
          Alterar
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import api from '../services/api'
  export default {
    name: 'Modal',
    props: {
        name:String,
        id:String,
        email:String

    },
    methods: {
      close() {
        this.$emit('close');
      },
      async alterarUsuario(){
          const alterarNome = await api.put("/edit_name", { nome: this.nome })
          
          console.log(alterarNome);
      },
      data(){
          return{
              userName:this.userName,
              name:"testes"
          }
      }
    },
  };
</script>
<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    border-radius: 10px;
    width: 300px;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .modal-body {
    position: initial;
    display:grid;
    padding: 20px 10px;
    margin: 10px
  }

  .modal-body, span{
    display: flexbox;
    align-items: flex-end;
  }

  span.titleForm{
      display: flex;
  }

  input.inputForm{
      font-size: 18px;
      padding: 10px 10px 0px 4px;   
      border-width: 0px;
      border-bottom: black solid 1px;
      border-radius: 3px;
      outline: none;

  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green-yes,
  .btn-green-no {
    color: white;
    border: 1px solid;
    border-radius: 5px;
    height: 25px;
    width: 75px;
    cursor: pointer;    
  }
  .btn-green-no{
    
    background: red;
    border-color: red;
  }
  .btn-green-yes{
    
    background: green;
    border-color: green;
  }
</style>