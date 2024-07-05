<script setup>

import {reactive} from "vue";


const state = reactive({
  name: 'John Doe',
  email: 'ff@hh.com',
  password: 'qwerty'
})


</script>
<template>
  <div class="user-profile">
    <h1>Hello {{ state.name }}</h1>
    <div>
      <span>  Change your name:</span> <input type="text" v-model="state.name"/>
      <span>  Change your email:</span> <input type="email" v-model="state.email"/>
      <span>  Change your password:</span> <input type="password" v-model="state.password"/>
    </div>

  </div>
</template>