<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useCarrinhoStore } from "@/stores/carrinho.js";

export default {
    computed: {
        ...mapStores(useCarrinhoStore),
        ...mapState(useCarrinhoStore, ["carrinho"]),
    },
    methods: {
        ...mapActions(useCarrinhoStore, [
            "getCarrinho",
            "removeFromCarrinho",
        ]),
        finishPurchase() {
            alert("Pedido Realizado!");
        }
    },
    async mounted() {
        try {
            await this.getCarrinho();
        } catch (e) {
            alert(e);
        }
    },
    removeFromCart(bookstoreItem) {
        console.info(bookstoreItem);
        try {
            const msg = this.removeFromCarrinho(bookstoreItem);
            alert(msg);
        } catch (e) {
            alert("Ooops! Algo de errado!");
        }
    },
}
</script>

<template>
  <section class="container">
    
    
    <div class="item1">
        <table>
            <tr>
                <th class="book">Título</th>
                <th class="quant">Excluir</th>
            </tr>
            <tr v-for="carrinhoItem in carrinho" :key="carrinhoItem.id" class="item">
                <td>{{ carrinhoItem.title }}</td>
                <td class="quant">
                    <button class="btn-remove" @click="removeFromCarrinho(carrinhoItem.id)">X</button> 
                </td>
            </tr>
        </table>
      <button class="endButton" @click="finishPurchase()">Finalizar</button>
    </div>
  </section>
</template>

<style>
body {
  background-color: whitesmoke;
  margin: 0;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #373337;
}
li {
  float: left;
}
li h1 {
  display: block;
  text-align: center;
  padding: 0.5vh;
  text-decoration: none;
  color: white;
}
#carrinho {
  float: right;
  text-align: center;
  padding: 0.5vh;
  text-decoration: none;
  color: white;
}
.container {
  margin: auto;
  width: 95%;
  height: 85vh;
  display: flex;
  flex-wrap: wrap;
}
.item1 {
  margin: 2.5%;
  background-color: #cfcfcf;
  text-align: center;
  font-size: 1.5em;
  width: 28%;
  align-items: center;
  text-align: left;
}
.item2 {
  margin: 2.5%;
  background-color: #868585;
  text-align: center;
  font-size: 1.5em;
  width: 28%;
  align-items: center;
  text-align: left;
}
table {
  font-size: 15px;
  width: 100%;
  margin: auto;
  border-collapse: collapse;
}
tr {
  width: 100%;
}
td,th {
  text-align: left;
  color: #000000;
  padding: 15px;
}
tr:nth-child(odd) {
  background-color: #dddddd;
}
th {
  height: 5vh;
  background-color: #2596be;
  color: white;
}
.posicao {
  width: 5%;

}

span {
  width: 100%;
}
.logoCarrinho {
  height: 8vh;
}
.logoNav {
  height: 8vh;
  float: left;
}
.addDelCarrinho {
  width: 40%;
  height: 40%;
}
.produto {
  width: 30%;
}
.quant {
  text-align-last: center;
  width: 25%;
}
.btn-remove {
    cursor: pointer;
    background-color: darkred;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position:relative;
  background-color: #f9f9f9;
  width: 100%;
  box-shadow: 0px 8px 16px 0px #2596be;
  padding: 12px 16px;
  border-radius: 5px;
  margin-bottom: 5px;
}
.dropdown:hover .dropdown-content {
  display: block;
}

.endButton {
  width: 80%;
  height: 5%;
  margin-left: 10%;
  margin-top: 5px;
  background-color: #2596be;
  border: none;
  border-radius: 5px;
  color: white;
}
.endButton:hover {
  background-color: #008000;
}
</style>