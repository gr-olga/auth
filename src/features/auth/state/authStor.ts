import { defineStore } from 'pinia'
export const authStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    error: null,
    email: null,
    password: null
  }),
  actions: {}
})
