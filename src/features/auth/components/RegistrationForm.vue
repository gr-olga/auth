<script setup>

import {reactive} from "vue";

const state = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const onRegistration = () => {
  console.log('Registration', state.name, state.email, state.password, state.confirmPassword)
}
</script>

<template>
  <h2>Registration</h2>
  <form @submit.prevent="onRegistration">
    <input type="text" v-model="state.name" placeholder="Name"/>
    <input type="email" v-model="state.email" placeholder="Email"/>
    <p>{{ state.email }}</p>
    <input type="password" v-model="state.password" placeholder="Password"/>
    <input type="password" v-model="state.confirmPassword" placeholder="Confirm Password"/>
    <button type="submit">Register</button>
  </form>
  <div>
    <router-link to="/">Already have an account?</router-link>
  </div>
</template>
