// Define the type for the Nuxt config to include the image property
// @ts-ignore - Ignoring TypeScript error for the image property
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://falster-klatreklub.dk' },
      ],
      title: 'Falster Klatreklub - Klatring for alle på Falster',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Falster Klatreklub tilbyder klatring for alle aldre og niveauer. Bliv medlem og få adgang til vores klatrefaciliteter for kun 500 kr. om året.' },
        { name: 'keywords', content: 'klatring, klatreklub, Falster, bouldering, klatrevæg, sport, motion, fritidsaktivitet' },
        { name: 'author', content: 'Falster Klatreklub' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://falster-klatreklub.dk/' },
        { property: 'og:title', content: 'Falster Klatreklub - Klatring for alle på Falster' },
        { property: 'og:description', content: 'Falster Klatreklub tilbyder klatring for alle aldre og niveauer. Bliv medlem og få adgang til vores klatrefaciliteter for kun 500 kr. om året.' },
        { property: 'og:image', content: 'https://falster-klatreklub.dk/bouldering1.webp' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://falster-klatreklub.dk/' },
        { name: 'twitter:title', content: 'Falster Klatreklub - Klatring for alle på Falster' },
        { name: 'twitter:description', content: 'Falster Klatreklub tilbyder klatring for alle aldre og niveauer. Bliv medlem og få adgang til vores klatrefaciliteter for kun 500 kr. om året.' },
        { name: 'twitter:image', content: 'https://falster-klatreklub.dk/bouldering1.webp' },
      ]
    },
  },

  // Use the correct module for Vuetify in Nuxt 3
  modules: ['@nuxt/image', '@nuxtjs/sitemap'],

  // Add alias configuration for easier imports
  alias: {
    '@': '~/',
  },

  // Configure build options
  build: {
    transpile: ['vuetify'],
  },

  // Configure auto-imports
  imports: {
    dirs: ['composables', 'utils'],
  },

  // Configure SSR for better SEO
  ssr: true,

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css',
  ],

  // Add Vuetify configuration through Vite plugin
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  // Disable Nuxt's default welcome page
  devtools: { enabled: false },

  compatibilityDate: '2025-03-10',

  // Sitemap configuration
  sitemap: {
    hostname: 'https://falster-klatreklub.dk',
    gzip: true,
  },

  // Configure image optimization
  // @ts-ignore - Ignoring TypeScript error for the image property
  nuxtImage: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
    // Default image quality
    quality: 80,
  },
});