<template>
<div class="login">
    <h1>Login</h1>
    <input type="text" placeholder="CPF ou Email">
    <br>
    <input type="password" placeholder="Senha">
    <br>
    <div class="btn-login">
        <button @click="save">Login</button>
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


<style scoped>



.publisher-form button {
  height: 35px;
  width: 20%;
  margin-left: 2%;
  background-color: rgb(63, 63, 125);
  color: whitesmoke;
  font-size: 1.2em;
  border-radius: 20px;
  border: 0;
}
</style>

