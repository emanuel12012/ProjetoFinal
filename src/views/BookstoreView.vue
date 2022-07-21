<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useBookstoreStore } from "@/stores/bookstore.js";
export default {
    computed: {
        ...mapStores(useBookstoreStore),
        ...mapState(useBookstoreStore, ["bookstore"]),
    },
    methods: {
        ...mapActions(useBookstoreStore, [
            "getBookstore",
            "addToCarrinho",
        ]),
    },
    async mounted() {
        try {
            await this.getBookstore();
        } catch (e) {
            alert(e);
        }
    },
    addToCart(bookstoreItem) {
        try {
            const msg = this.addToCarrinho(bookstoreItem);
            alert(msg);
        } catch (e) {
            alert("Ooops! Algo de errado!");
        }
    }
}
</script>

<template>
    <section class="container">
        <div v-for="bookstoreItem in bookstore" :key="bookstoreItem.id" class="item">
            <div class="book">

            </div>
            <div class="description">
                <h3>{{ bookstoreItem.title }}</h3>
                <h5> <span>Editora</span> {{ bookstoreItem.publisher.description }}</h5>
            </div>
            <div class="actions">
                <button @click="addToCarrinho(bookstoreItem)" class="add-cart-button">Adicionar ao Carrinho</button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.container{
    margin: auto;
    width: 95%;
    height: 45vh;
    display: flex;
    flex-wrap: wrap;
}
.item {
    margin: 25px;
    background-color: #2596be;
    text-align: center;
    font-size: 1.5em;
    width: 46.5%;
    align-items: center;
    text-align: left;
    display: flex;
} 
span {
    font-weight: bold;
}
.description{
    width: 65%;
    float: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5%;
}
.actions {
    width: 30%;
    button:hover;

}
.add-cart-button {
    width: 100%;
    padding: 15%;
    border: none;
    background-color: #91e491;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
}
.add-cart-button:hover {
    background-color: mediumspringgreen;


}

</style>