<template>
    <v-app-bar
      elevation="0"
      color="white"
      class="px-4"
    >
      <v-app-bar-title class="primary-text" @click="navigateToHome">FALSTER KLATREKLUB</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn variant="text" class="primary-text" :to="{ name: 'Home', hash: '#about' }">Om os</v-btn>
      <v-btn variant="text" class="primary-text" :to="{ name: 'BecomeMember' }">Bliv medlem</v-btn>
      <v-btn variant="text" class="primary-text" :to="{ name: 'Bestyrelse' }">Bestyrelse</v-btn>
      <v-btn variant="text" class="primary-text" :to="{ name: 'Gallery' }">Billeder</v-btn>
    </v-app-bar>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const navigateToHome = () => {
    router.push({ path: '/' });
  };
  </script>

  <style scoped>
  .primary-text {
    color: "black";
  }
  </style>
  