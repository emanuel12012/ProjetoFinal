<template>
<div class="login">
    <h1>Login</h1>
    <input type="text" placeholder="CPF ou Email">
    <br>
    <input type="password" placeholder="Senha">
    <br>
    <div class="btn-login">
        <button>Login</button>
    </div>
    <p>
        Você não tem conta?
        <a href="">Crie uma conta</a>
    </p>
</div>
</template>

<script>

export default {
    name: "LoginView",
    data() {
        return{};
    },
    methods: {}
};

</script>


<!-- <script setup></script>

<template>
  <h1>Sistema de gestão de produtos</h1>
  <h2>Fazer uma landpage</h2>
</template> -->