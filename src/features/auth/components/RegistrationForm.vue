<script>
const onRegistration = () => {
  console.log('submit', email, password, confirmPassword)
}
</script>

<template>
  <h2>Registration</h2>
  <form @submit.prevent="onRegistration">
    <input type="email" v-model="email" placeholder="Email" />
    <p>{{ email }}</p>
    <input type="password" v-model="password" placeholder="Password" />
    <input type="password" v-model="confirmPassword" placeholder="Confirm Password" />
    <button type="submit">Register</button>
  </form>
  <div>
    <router-link to="/">Already have an account?</router-link>
  </div>
</template>
