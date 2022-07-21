import { defineStore } from "pinia";
import axios from "axios";

export const useCarrinhoStore = defineStore({
  id: "carrinho",
  state: () => ({
    carrinho: [],
  }),
  actions: {
    async getCarrinho() {
      try {
        const { data } = await axios.get(
          "https://backend-livraria-rudinei.herokuapp.com/carrinho"
        );
        this.carrinho = data;
        console.info(data);
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        if (e.response.status === 404)
          return Promise.reject(e.response.statusText);
        return Promise.reject("Erro desconhecido ao consultar 'Carrinho'");
      }
    },
    async removeFromCarrinho(carrinhoId) {
        console.info(carrinhoId);
      try {
        await axios.delete(`https://backend-livraria-rudinei.herokuapp.com/carrinho/${carrinhoId}`);
        const index = this.carrinho.findIndex(
          (carrinhoItem) => carrinhoItem.id === carrinhoId
        );
        this.carrinho.splice(index, 1);
        return Promise.resolve();
      } catch (e) {
        return Promise.reject("Erro ao excluir");
      }
    },
  },
});