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
