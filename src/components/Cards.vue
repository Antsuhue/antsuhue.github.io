<template>
  <div>
    <div class="row">
      <div class="card green">
        <h2>{{this.emplooyerName}}</h2>
        <p>Investimento: </p>
        <p>Receita: R$ {{this.receita}}</p>
        <p>Custo por Ordem: R$ {{this.orderCost}}</p>
        <p>ROI: R$ </p>
        <p>Convergência à meta:</p>
        <p>Investimento: +5.7</p>
        <p>Rentabilidade: -5.7</p>
        <img class="image" src="../assets/pontos.png" alt="money" />
      </div> 

    </div>
  </div>
</template>

<script>
import api from "../services/api"
export default {
  methods:{
    
  },
  async created(){
    function formatPrice(value){
      const val = Number(value.replace(",", "."));
      if (!val) return '0,00';
      const valueString = val.toFixed(2).replace(".", ",");
      return valueString.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    const response = await api.post("/consultCards",{"viewId":"156007659"})
    console.log(response)
    this.receita = formatPrice(response.data.revenue)
    this.orderCost = formatPrice(response.data.costPerOrder)
    this.emplooyerName = response.data.emplooyer
  },
  data(){
    return{
      receita:"",
      orderCost:"",
      emplooyerName:""
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap');


.row {
  margin-top: 60px;
  margin-left: 150px;
  display: flex;  
  flex-wrap: wrap;

}
.card {
  border-radius: 5px;
  box-shadow: 7px 7px 13px 9px rgba(50, 50, 50, 0.22);
  padding: 30px;
  margin: 20px;
  min-width: 20%;
  transition: all 0.3s ease-out;
}

.card:hover {
  transform: translateY(-5px);
  cursor: pointer;
}
 
.card p {
  color: #a3a5ae;
  font-size: 16px;
}
 
.image {
  float: right;
  max-width: 64px;
  max-height: 64px;
}


.green {
  border-left: 5px solid #3bb54a;
}

.yellow {
  border-left: 5px solid yellow;
  
}

.red {
  border-left: 5px solid #b3404a;
}


@media (max-width:550px){
  .card {
    min-width: 190px;  
  }
}

</style>