import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import BooksView from '../views/BooksView.vue'
import CategoryView from '../views/CategoryView.vue'
import PublisherView from '../views/PublisherView.vue'
import LoginView from '../views/LoginView.vue';
import CarrinhoView from '../views/CarrinhoView.vue';
import BookstoreView from '../views/BookstoreView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BookstoreView,
    },
   
    {
    path: '/books',
    name: 'books',
    component: BooksView,
    },

    {
      path: '/category',
      name: 'category',
      component: CategoryView,
    },

    {
      path: '/publisher',
      name: 'publisher',
      component: PublisherView,
    },

    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },

    {
      path: '/carrinho',
      name: 'carrinho',
      component: CarrinhoView
    },

    ],
})

export default router
