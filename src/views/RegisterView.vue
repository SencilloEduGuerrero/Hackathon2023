<template>
    <v-card max-width="800" heigth="800" class="mx-auto mt-10">
        <v-card-title tag="h3" class="text-h4 text-center mt-10">Register</v-card-title>

        <v-form class="w-75 mx-auto mt-3 mb-10" autocomplete="off" @submit.prevent="validate">
            <v-text-field 
                variant="outlined" 
                color="indigo-darken-1" 
                label="Name"
                type="text"
                required
                v-model="auth.register.name"
            />

            <v-text-field 
                variant="outlined" 
                color="indigo-darken-1" 
                label="Email"
                type="email"
                required
                v-model="auth.register.email"
                :rules="auth.emailRules"
                class="mt-3"
            />

            <v-text-field 
                variant="outlined" 
                color="indigo-darken-1" 
                label="Password"
                type="password"
                required
                v-model="auth.register.password"
                :rules="auth.passwordRules"
                class="mt-3"
            />

            <v-text-field
                variant="outlined"
                color="indigo-darken-1"
                label="Phone"
                placeholder="XXX-XXX-XXXX"
                required
                v-model="auth.register.phone"
                :rules="auth.phoneRules"
                class="mt-3"
            />

            <v-text-field
                variant="outlined"
                color="indigo-darken-1"
                label="Postal Code"
                required
                v-model="auth.register.postalCode"
                :rules="auth.postalCodeRules"
                class="mt-3"
            />

            <v-btn type="submit" class="w-100" color="indigo-lighten-1">Log In</v-btn>
        </v-form>
    </v-card>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore();

const validate = () => {

}
</script>