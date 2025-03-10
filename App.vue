<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// No need to import NavBar here as it will be used in the default layout

// Google Analytics setup
useHead({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-NGNWM2QN6M',
      async: true
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-NGNWM2QN6M');
      `,
      type: 'text/javascript'
    }
  ]
})
</script>