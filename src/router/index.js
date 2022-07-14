import { createRouter, createWebHistory } from 'vue-router'
import BooksView from '../views/BooksView.vue'
import CarrinhoView from '../views/CarrinhoView.vue'
import LoginView from '../views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'books',
      component: BooksView,
    },
   
    {
    path: '/carrinho',
    name: 'carrinho',
    component: CarrinhoView,
    },

    {
      path: '/login',
      name: 'login',
      component: LoginView,
    }
  ],
})

export default router
