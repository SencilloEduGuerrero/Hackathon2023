<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- Layout principal -->
    <v-layout>
      
      <!-- Contenido -->
      <v-main>
        <RouterView />
      </v-main>
    </v-layout>
</template>

