<!-- <script setup>
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template> -->

<template>
<div class ="main-container">
  <h1>Gerenciar pedidos</h1>
  <DashboardView />
</div>
</template>

<script>
import DashboardView from './DashboardView.vue';

export default {
    name: "PedidosView",
    components: { 
      DashboardView 
      }
}
</script>