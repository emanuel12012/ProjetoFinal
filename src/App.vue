<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
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

main {
  padding: 10px;
}
</style>