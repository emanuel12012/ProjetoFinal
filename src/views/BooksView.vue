<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useBookStore } from "@/stores/book";
import { useCategoryStore } from "@/stores/category";
import { usePublisherStore } from "@/stores/publisher";
export default {
  data() {
    return {
      currentBook: {
        id: "",
        name: "",
        categoryId: "",
        publisherId: "",        
      },
      editing: false,
    };
  },
  computed: {
    ...mapStores(useBookStore),
    ...mapState(useBookStore, ["books"]),
    ...mapState(useCategoryStore, ["categories"]),
    ...mapState(usePublisherStore, ["publishers"]),
  },
  methods: {
    ...mapActions(useBookStore, [
      "getAllBooks",
      "saveBook",
      "deleteBook",
    ]),
    ...mapActions(useCategoryStore, ["getAllCategories"]),
    ...mapActions(usePublisherStore, ["getAllPublishers"]),
    async save() {
      try {
        
        const msg = await this.saveBook(this.currentBook);
        alert(msg);
        this.editing = false;
        this.currentBook = {};
      } catch (e) {
        alert("Ooops! Algo de errado!");
      }
    },
    async deleteItem(book_id) {
      try {
        await this.deleteBook(book_id);
        alert("Item excluído com sucesso.");
      } catch (e) {
        alert(e);
      }
    },
    prepareToUpdate(book) {
      Object.assign(this.currentBook, book);
      this.editing = true;
    },
  },
  async mounted() {
    try {
      await this.getAllCategories();
      await this.getAllBooks();
      await this.getAllPublishers();
    } catch (e) {
      alert(e);
    }
  },
};
</script>
<template>
  <h1>Cadastro de Livros</h1>
  <div class="book-form">
    <input type="text" v-model="currentBook.name" />
    <select v-model="currentBook.categoryId">
      <option
        v-for="category in categories"
        :value="category.id"
        :key="category.id"
      >
        {{ category.description }}
      </option>
    </select>

      <select v-model="currentBook.publisherId">
      <option
        v-for="publisher in publishers"
        :value="publisher.id"
        :key="publisher.id"
      >
        {{ publisher.description }}
      </option>
    </select>
    
    
     
    <button @click="save">
      {{ editing ? "Salvar" : "Adicionar" }}
    </button>
  </div>
  <div class="book-list">
    <table class="table">
      <thead>
        <tr>
          <th class="text-left">
            <span> <h2>ID</h2> </span>
          </th>
          <th class="text-left">
            <span> <h2>Descrição</h2> </span>
          </th>
          <th class="text-left">
            <span> <h2>Category</h2> </span>
          </th>
          <th class="text-left">
            <span> <h2>Editora</h2> </span>
          </th>
          <th class="text-left">
            <span> <h2>Ações</h2> </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book of books" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.name }}</td>
          <td>{{ book.category.description }}</td>
          <td>{{ book.publisher.description }}</td>
          <td>
            <button @click="prepareToUpdate(book)">Update</button>
            <button @click="deleteItem(book.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.book-form input {
  width: 40%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid gray;
  padding-left: 20px;
  font-size: 1.2em;
}

.book-form select {
  width: 30%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid gray;
  padding-left: 20px;
  font-size: 1.2em;
  margin-left: 1%;
}

.book-form button {
  height: 35px;
  width: 20%;
  margin-left: 2%;
  background-color: rgb(63, 63, 125);
  color: whitesmoke;
  font-size: 1.2em;
  border-radius: 20px;
  border: 0;
}

.book-list,
.book-form {
  margin: 3% auto;
  width: 70%;
}
table {
  /* display: table; */
  border-collapse: separate;
  border-spacing: 2px;
  border-color: gray;
  width: 100%;
}

th {
  border-bottom: 2px solid #444;
  text-align: left;
}

td {
  padding: 10px;
}

thead tr {
  background-color: #444;
  color: whitesmoke;
}

tbody tr:nth-child(odd) {
  background-color: #c3c3c3;
}
</style>
