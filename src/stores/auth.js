import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    //Varibales del store
    const user = reactive({
        email: '',
        password: ''
    })

    const register = reactive({
        email: '',
        password: '',
        name: '',
        phone: '', // requerido 
        postalCode: '' // requerido
    })

    function login() {
        console.log(user.email, user.password)
    }

    const emailRules = computed(() => {
        return [ (v) => !!v || 'Email is required', (v) => /.+@.+\..+/.test(v) || 'Email wrong format' ]
    })

    const passwordRules = computed(() => {
        return [ (v) => !!v || 'Password is required' ]
    })

    const phoneRules = computed(() => {
        return [
            (v) => !!v || 'Phone is required',
            (v) => /^(\d{3}-\d{3}-\d{4}|\(\d{3}\) \d{3}-\d{4})$/.test(v) || 'Phone must have right format',
            (v) => (v && v.length >= 10 && v.length <= 15) || 'Phone must have at least 10 or 15 numbers',
        ]
    })

    const postalCodeRules = computed(() => {
        return [
            (v) => !!v || 'Postal code is required',
            (v) => /^\d{5}(-\d{4})?$/.test(v) || 'Postal code must have right format',
            (v) => (v && v.length === 5) || 'Postal code must have 5 numbers',
        ]
    })

    return {
        user,
        register,
        login,
        emailRules,
        passwordRules,
        phoneRules,
        postalCodeRules
    }
})