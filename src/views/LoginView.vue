<template>
    <div style="background-color: rgba(24, 24, 39, 1);">
        <v-card max-width="800" heigth="800" class="mx-auto mt-10">
        <v-card-title tag="h3" class="text-h4 text-center mt-10">Log In</v-card-title>

        <v-form class="w-75 mx-auto mt-3 mb-10" autocomplete="off" @submit.prevent="validate">
            <v-text-field 
                variant="outlined" 
                color="indigo-darken-1" 
                label="Email"
                type="email"
                required
                v-model="auth.user.email"
                :rules="auth.emailRules"
            />

            <v-text-field 
                variant="outlined" 
                color="indigo-darken-1" 
                label="Password"
                type="password"
                required
                v-model="auth.user.password"
                :rules="auth.passwordRules"
                class="mt-3"
            />

            <v-btn type="submit" class="w-100 mt-3E" color="indigo-lighten-1">Log In</v-btn>
        </v-form>
    </v-card>
    </div>
</template>     

<script setup>
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore();

const validate = () => {
    auth.login()
}
</script>