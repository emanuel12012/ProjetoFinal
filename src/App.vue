<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/category">Category</RouterLink> |
        <RouterLink to="/publisher">Publisher</RouterLink> |        
        <RouterLink to="/books">Books</RouterLink> |
        <RouterLink to="/carrinho">Carrinho</RouterLink> 
      
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  height: 100vh;
  
}

header {
  height: 10%;
  background-color: #2596be;
  color: whitesmoke;
  font-size: 1.5em;
  display: flex;
  align-items: center;
}

/*tbody {
  font-size: 1.8em;
}*/



main {
  padding: 10px;
}
</style>