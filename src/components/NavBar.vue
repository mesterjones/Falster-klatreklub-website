<template>
    <v-app-bar
      elevation="0"
      color="white"
      class="px-4"
    >
      <v-app-bar-title class="primary-text" @click="navigateToHome">FALSTER KLATREKLUB</v-app-bar-title>
      
      <!-- Show buttons on desktop -->
      <div class="d-none d-sm-flex">
        <v-btn variant="text" class="primary-text" :to="{ name: 'Home', hash: '#about' }">Om os</v-btn>
        <v-btn variant="text" class="primary-text" :to="{ name: 'BecomeMember' }">Bliv medlem</v-btn>
        <v-btn variant="text" class="primary-text" :to="{ name: 'Bestyrelse' }">Bestyrelse</v-btn>
        <v-btn variant="text" class="primary-text" :to="{ name: 'Gallery' }">Billeder</v-btn>
      </div>

      <!-- Show burger menu on mobile -->
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-app-bar-nav-icon
            class="d-sm-none"
            v-bind="props"
          ></v-app-bar-nav-icon>
        </template>
        <v-list>
          <v-list-item :to="{ name: 'Home', hash: '#about' }">
            <v-list-item-title>Om os</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'BecomeMember' }">
            <v-list-item-title>Bliv medlem</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'Bestyrelse' }">
            <v-list-item-title>Bestyrelse</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'Gallery' }">
            <v-list-item-title>Billeder</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
  