import { defineStore } from "pinia";
import axios from "axios";

export const useBookstoreStore = defineStore({
  id: "bookstore",
  state: () => ({
    bookstore: [],
    carrinho: [],
  }),
  actions: {
    async getBookstore() {
      try {
        const { data } = await axios.get(
          "https://backend-livraria-rudinei.herokuapp.com/books?expand=category&expand=publisher"
        );
        this.bookstore = data;
        console.info(data);
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        if (e.response.status === 404)
          return Promise.reject(e.response.statusText);
        return Promise.reject("Erro desconhecido ao consultar 'Book'");
      }
    },
    async addToCarrinho(book) {
      try {
        const { data } = await axios.post(
          "https://backend-livraria-rudinei.herokuapp.com/carrinho",
          book
        );
        this.carrinho.push(data);
        return Promise.resolve("Livro adicionado ao carrinho com sucesso!");
      } catch (e) {
        console.error(e);
        return Promise.reject(e);
      }
    },
  },
});