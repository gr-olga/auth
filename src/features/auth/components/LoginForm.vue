<script setup>
import {reactive} from "vue";

const state = reactive({
  email: '',
  password: ''
})
const onLogin = () => {
  console.log('Login', state.email, state.password)
}
</script>

<template>
  <h2>Login</h2>
  <form @submit.prevent="onLogin">
    <input type="email" v-model="state.email" placeholder="Email"/>
    <input type="password" v-model="state.password" placeholder="Password"/>
    <button type="submit">Login</button>
  </form>
  <div>
    <router-link to="/registration">Don't have an account?</router-link>
  </div>
</template>