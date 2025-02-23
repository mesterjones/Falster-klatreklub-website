<template>
    <v-app-bar
      elevation="0"
      color="#3A4A30"
      class="px-4"
    >
      <v-app-bar-title class="primary-text">FALSTER KLATREKLUB</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn variant="text" class="primary-text" :to="{ name: 'Home' }">Home</v-btn>
      <v-btn variant="text" class="primary-text" :to="{ name: 'About' }">Om os</v-btn>
      <v-btn variant="text" class="primary-text" :to="{ name: 'Contact' }">Bliv medlem</v-btn>
    </v-app-bar>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  </script>

  <style scoped>
  .primary-text {
    color: #FFF4E4;
  }
  </style>
  