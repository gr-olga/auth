import {defineStore} from 'pinia'
import type {User} from "@/types/user";

export const useAuthStore = defineStore('userAuth', {
    state: (): User => ({
        name: '',
        email: '',
        password: ''
    }),
    actions: {
        setRegistration(name: string, email: string, password: string) {
            this.name = name
            this.email = email
            this.password = password
            console.log('registration', name, email, password)
        },
        setLogin(email: string, password: string) {
            if (this.email === email && this.password === password) {
                console.log('login')
            } else {
                console.log('error')
            }
        }
    },

    setLogout() {
        this.name = ''
        this.email = ''
        this.password = ''
        console.log('logout')
    },

    setReset() {
        console.log('reset')
    }
})
