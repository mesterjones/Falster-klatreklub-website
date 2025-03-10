<template>
    <v-app-bar
      elevation="0"
      color="white"
      class="px-4"
    >
      <v-app-bar-title class="primary-text cursor-pointer hover:text-grey" @click="navigateToHome">FALSTER KLATREKLUB</v-app-bar-title>
      
      <!-- Show buttons on desktop -->
      <div class="d-none d-sm-flex">
        <v-btn variant="text" class="primary-text" to="/#about">Om os</v-btn>
        <v-btn variant="text" class="primary-text" to="/bliv-medlem">Bliv medlem</v-btn>
        <v-btn variant="text" class="primary-text" to="/bestyrelse">Bestyrelse</v-btn>
        <v-btn variant="text" class="primary-text" to="/billeder">Billeder</v-btn>
      </div>

      <!-- Show burger menu on mobile -->
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-app-bar-nav-icon
            class="d-flex d-sm-none"
            v-bind="props"
          ></v-app-bar-nav-icon>
        </template>
        <v-list>
          <v-list-item to="/#about">
            <v-list-item-title>Om os</v-list-item-title>
          </v-list-item>
          <v-list-item to="/bliv-medlem">
            <v-list-item-title>Bliv medlem</v-list-item-title>
          </v-list-item>
          <v-list-item to="/bestyrelse">
            <v-list-item-title>Bestyrelse</v-list-item-title>
          </v-list-item>
          <v-list-item to="/billeder">
            <v-list-item-title>Billeder</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </template>
  
  <script setup>
  const router = useRouter();
  
  function navigateToHome() {
    router.push('/');
  }
  </script>

  <style scoped>
  .primary-text {
    color: "black";
  }
  </style>
  