<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Aviso!
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
          Deseja realmente excluir o usuário {{userName}}
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
          Não
        </button>
        <button
          type="button"
          class="btn-green-yes"
          @click="deleteUser"
        >
          Sim
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
        userName:String,
        id:String
    },
    methods: {
      close() {
        this.$emit('close');
      },
      async deleteUser(){
        const obj = {id:this.id}
        api.post(`/delete_user`, obj)
        await this.$router.push("/settings")
      },
      data(){
          return{
              id:this.id
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
    position: relative;
    padding: 20px 10px;
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
    width: 50px;
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