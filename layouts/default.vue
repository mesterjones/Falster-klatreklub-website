<template>
  <v-app>
    <NavBar />
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue';
</script> 