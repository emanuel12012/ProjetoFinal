import { defineStore } from "pinia";
import axios from "axios";

export const useBookStore = defineStore({
  id: "book",
  state: () => ({
    books: [],
  }),
  actions: {
    async getAllBooks() {
      try {
        const { data } = await axios.get(
          "https://backend-livraria-rudinei.herokuapp.com/books?expand=category&expand=publisher"
        );
        this.books = data;
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        if (e.response.status === 404)
          return Promise.reject(e.response.statusText);
        return Promise.reject("Erro desconhecido ao consultar 'Books'");
      }
    },
    async addBook(book) {
      try {
        const { data } = await axios.post(
          "https://backend-livraria-rudinei.herokuapp.com/books",
          book
        );
        this.books.push(data);
        return Promise.resolve("Categoria adicionada com sucesso!");
      } catch (e) {
        console.error(e);
        return Promise.reject(e);
      }
    },
    async updateBook(book) {
      try {
        delete book.category;
        await axios.put(
          `https://backend-livraria-rudinei.herokuapp.com/books/${book.id}`,
          book
        );
        const index = this.books.findIndex((c) => c.id === book.id);
        this.books.splice(index, 1, book);
        return Promise.resolve("Categoria alterada com sucesso!");
      } catch (e) {
        console.error(e);
        return Promise.reject(e);
      }
    },
    async saveBook(book) {
      if (book.id) {
        return await this.updateBook(book);
      } else {
        return await this.addBook(book);
      }
    },
    async deleteBook(book_id) {
      try {
        await axios.delete(
          `https://backend-livraria-rudinei.herokuapp.com/books/${book_id}`
        );
        const index = this.books.findIndex((book) => book.id === book_id);
        this.books.splice(index, 1);
        return Promise.resolve();
      } catch (e) {
        return Promise.reject("Erro ao excluir");
      }
    },
  },
});
