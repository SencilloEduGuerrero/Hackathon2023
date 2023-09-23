<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-card max-width="1200" class="mx-auto">
    <!-- Layout principal -->
    <v-layout>

      <!-- Barra de navegacion -->
      <v-app-bar  color="blue-lighten-1">
        <template v-slot:prepend>
          <v-btn :to="{ name: 'home' }"> WaterSense </v-btn>
        </template>

        <template v-slot:append> <!-- Coloca elementos a la derecha -->
          <v-btn :to="{ name: 'home' }"> Home </v-btn>
          <v-btn :to="{ name: 'login' }"> Log In </v-btn>
          <v-btn :to="{ name: 'register' }"> Register </v-btn>
        </template>
      </v-app-bar>

      <!-- Contenido -->
      <v-main>
        <RouterView />
      </v-main>
    </v-layout>
  </v-card>
    
</template>

