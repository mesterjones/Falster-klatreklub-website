<template>
    <v-container class="home-container">
        <section id="home">
            <v-row>
                <v-col
                    class="d-flex align-center justify-center position-relative"
                    :style="{
                        'background-color': 'grey',
                        'height': '70vh'
                    }"
                >
                    <!-- Background image -->
                    <div class="hero-background-container">
                        <img 
                            src="/bouldering1.webp" 
                            alt="Hero background"
                            class="hero-background-image"
                            fetchpriority="high"
                        />
                    </div>
                    
                    <v-card class="mx-auto pa-6" width="800" max-width="95%" elevation="0" style="background-color: white; position: relative; z-index: 2;">
                        <div class="text-center" >
                        <h1 class="primary-text mb-6 responsive-title">Velkommen til Falster Klatreklub</h1>
                        <p class="primary-text text-body-1 responsive-text" style="white-space: pre-line; color: black;">
                            Vi er en lille, hyggelig klub med plads til alle – uanset om du er nybegynder eller erfaren klatrer.

                            For kun 500 kr. om året kan du blive medlem og få fri adgang. <br>
                        </p>
                        <v-btn 
                        color="black"
                        @click="$router.push('/bliv-medlem')"
                        class="primary-text mt-4"
                        aria-label="Bliv medlem">Bliv medlem</v-btn>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify="center" class="mt-8" style="max-width: 1000px; margin: 0 auto;">
                <v-col cols="12" md="6" class="mb-4">
                    <v-card class="mx-auto pa-3 info-card" max-width="400" width="100%" elevation="0" style="background: linear-gradient(135deg, #f0fff4, #d4edda);" rounded="lg">
                        <div class="text-center h-100 d-flex flex-column">
                            <h2 class="mb-2" style="color: black; font-weight: bold;">Klatretider</h2>
                            <div class="climbing-schedule flex-grow-1">
                                <div class="time-slot mb-2">
                                    <h3 class="day-header">Tirsdage</h3>
                                    <div class="time-detail">
                                        <p>17-19: Hyggelig familieklatring for børn og forældre</p>
                                        <p>18-21: Klatring for alle</p>
                                    </div>
                                </div>
                                
                                <div class="time-slot mb-2">
                                    <h3 class="day-header">Torsdage</h3>
                                    <div class="time-detail">
                                        <p>18-21: Klatring for alle</p>
                                    </div>
                                </div>
                                
                                <div class="time-slot">
                                    <h3 class="day-header">Søndage</h3>
                                    <div class="time-detail">
                                        <p>10-14: Klatring for alle</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" class="mb-4">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card 
                            class="mx-auto pa-4 position-relative transition-transform info-card" 
                            :class="{ 'scale-card': isHovering }"
                            max-width="400"
                            width="100%" 
                            elevation="0" 
                            rounded="lg" 
                            v-bind="props"
                            style="cursor: pointer; background: linear-gradient(135deg, #f0fff4, #d4edda);"
                        >
                            <a 
                                href="https://www.google.com/maps/place/Industrivej+10,+4800+Nyk%C3%B8bing+Falster/@54.764444,11.864444,17z" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                class="text-decoration-none card-link"
                            >
                                <div class="text-center">
                                    <h2 class="mb-4" style="color: black; font-weight: bold;">Find os her</h2>
                                    <div class="d-flex justify-center">
                                        <v-list density="compact" bg-color="transparent" class="pa-0 mx-auto" width="fit-content">
                                            <v-list-item v-for="(item, i) in contactInfo" :key="i">
                                            <template v-slot:prepend>
                                                <v-icon :icon="item.icon" color="black" size="small"></v-icon>
                                            </template>
                                            <v-list-item-title 
                                                class="text-color-fcfaf1 ms-2" 
                                                style="color: black; font-weight: bold; white-space: normal; word-wrap: break-word;"
                                            >
                                                {{ item.text }}
                                            </v-list-item-title>
                                        </v-list-item>
                                        </v-list>
                                    </div>

                                </div>
                            </a>
                        </v-card>
                    </v-hover>

                </v-col>
            </v-row>
        </section>
    </v-container>
    <v-container class="about-container">
        <section id="about">
            <v-divider class="my-8"></v-divider>
            <v-row>
                <v-col cols="12" md="10" lg="8"  class="mx-auto px-6">
                    <div class="text-h5 font-weight-medium mb-4 text-center" style="color: black;">
                        OM OS
                    </div>
                    <p class="text-grey-darken-2 text-body-1" style="color: grey;">
                        Falster Klatreklub er en hyggelig lille forening med gode faciliteter og en åben atmosfære. 
                        Her er mulighed for, at lære om klatring, teknikker og udstyr, samt en anderledes måde, at bruge kroppen på og komme i form. 
                        Vores primære fokus er på klatredisciplinen bouldering, teknisk klatring i lav højde, men vi har også en 8m rebvæg hvor man 
                        kan lære om rebklatring og sikringsteknikker. Aftener i klubben er præget af godt samvær om klatring i fællesskab, sparring og udfordringer, 
                        samt kaffe og hygge. <br><br>

                        <strong>Som medlem er der fri adgang til klubben alle ugens dagen. Derudover er der træning 3 gang om ugen.</strong> <br><br>

                        Foreningen vægter medlemsinddragelse højt og derfor er der rig mulighed for at være med til, at forme hvad der skal ske i klubben. <br><br>

                        Udover de ugentlige aftener, planlægger vi flere gange om året ture til større klatreklubber, eks. Blocks & Walls i København, eller ture ud i naturen til klatring på rigtige klipper. <br><br>

                        Det er gratis at besøge klubben og prøve klatringen af et par gange, og skulle man blive glad for det, så er medlemsskabet billigt. 
                        500 for et årligt medlemskab og har man familiemedlemmer koster hvert ekstra familiemedlem i samme husstand 100 DKK om året. <br><br>

                        Lyder det som noget for dig, eller har du spørgsmål så kan vi kontaktes via formularen herunder. Du kan også besøge os på Facebook lige her: <a href="https://www.facebook.com/Falsterklatre" target="_blank" rel="noopener noreferrer"><v-icon icon="mdi-facebook" color="blue"></v-icon></a>
                    </p>
                </v-col>
            </v-row>
        </section>
    </v-container>
    <v-container>
        <section id="contact">
            <v-divider class="my-8"></v-divider>
            <v-row>
                <v-col cols="12" md="10" lg="8"  class="mx-auto">
                    <v-card
                        class="pa-6 rounded-lg"
                        elevation="1"
                        style="background-color: white"
                    > 
                        <div class="text-h5 font-weight-medium mb-4 text-center" style="color: black;">
                            KONTAKT OS
                        </div>
                        <h2 class="text-h6 font-weight-regular mb-6 text-grey-darken-2 text-center" style="color: grey;">
                            Udfyld formularen nedenfor, så vender vi tilbage hurtigst muligt.
                        </h2>
                        
                        <v-form ref="contactForm" @submit.prevent="submitForm" class="mt-4">
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                    v-model="formData.name"
                                    label="Navn"
                                    variant="outlined"
                                    density="comfortable"
                                    bg-color="white"
                                    required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                    v-model="formData.email"
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    density="comfortable"
                                    bg-color="white"
                                    required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea
                                    v-model="formData.message"
                                    label="Besked"
                                    variant="outlined"
                                    density="comfortable"
                                    bg-color="white"
                                    rows="4"
                                    required
                                    ></v-textarea>
                                </v-col>
                                <v-col cols="12">
                                    <div align="center">
                                        <v-btn
                                    :loading="loading"
                                    color="black"
                                    size="large"
                                    type="submit"
                                    variant="flat"
                                    class="px-4"
                                    aria-label="Send besked"
                                    >
                                    Send besked
                                    </v-btn>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-form>

                        <v-alert
                            v-if="success"
                            type="success"
                            variant="tonal"
                            class="mt-4"
                            style="background-color: white; color: white;"
                        >
                            Tak for din besked! Vi vender tilbage hurtigst muligt.
                        </v-alert>
                        
                        <v-alert
                            v-if="error"
                            type="error"
                            variant="tonal"
                            class="mt-4"
                            style="background-color: grey; color: white;"
                        >
                            Der opstod en fejl. Prøv venligst igen.
                        </v-alert>
                    </v-card>
                </v-col>
            </v-row>
        </section>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
// Remove incorrect import
// import { useSeoMeta } from '@vueuse/core';

// Add SEO metadata for the homepage
useSeoMeta({
  title: 'Falster Klatreklub - Klatring for alle i Nykøbing Falster',
  ogTitle: 'Falster Klatreklub - Klatring for alle i Nykøbing Falster',
  description: 'Falster Klatreklub tilbyder klatring for alle aldre og niveauer. Vi tilbyder bouldering og rebklatring.',
  ogDescription: 'Falster Klatreklub tilbyder klatring for alle aldre og niveauer. Vi tilbyder bouldering og rebklatring.',
  ogImage: 'https://falster-klatreklub.dk/bouldering1.webp',
  twitterCard: 'summary_large_image',
})

// Add structured data (JSON-LD) for better SEO
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Klatrecenter',
        name: 'Falster Klatreklub',
        description: 'Falster Klatreklub tilbyder klatring for alle aldre og niveauer. Bliv medlem og få adgang til vores klatrefaciliteter for kun 500 kr. om året.',
        url: 'https://falster-klatreklub.dk',
        image: 'https://falster-klatreklub.dk/bouldering1.webp',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Industrivej 10',
          addressLocality: 'Nykøbing F',
          postalCode: '4800',
          addressCountry: 'DK'
        },
        openingHours: [
          'Tu 17:00-21:00',
          'Th 18:00-21:00',
          'Su 10:00-14:00'
        ],
        priceRange: '500 DKK per year',
        telephone: '+4531981742'
      })
    }
  ]
})

const formData = ref({
  name: "",
  email: "",
  message: "",
});
const loading = ref(false);
const success = ref(false);
const error = ref(false);
const formspreeUrl = ref("https://formspree.io/f/mvgzevjk");

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const submitForm = async () => {
  loading.value = true;
  success.value = false;
  error.value = false;

  try {
    const response = await fetch(formspreeUrl.value, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData.value),
    });

    if (response.ok) {
      success.value = true;
      formData.value = { name: "", email: "", message: "" };
    } else {
      error.value = true;
    }
  } catch (error) {
    error.value = true;
  } finally {
    loading.value = false;
  }
};

const contactInfo = [
    { icon: 'mdi-home', text: 'Falster Klatreklub' },
    { icon: 'mdi-map-marker', text: 'Kulturfabrikken - Industrivej 10' },
    { icon: 'mdi-city', text: '4800 Nykøbing F' }
];

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap');

.home-container {
    min-height: 80vh;
    font-family: 'Open Sans', sans-serif;
    background-color: white;
    margin-bottom: 10px;
}

.hero-background-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.about-container {
    margin-top: 10px;
    padding: 20px 0;
    background-color: white;
}

.primary-text {
    color: black;
}

h1, h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: black;
}

h1 {
    font-size: 2.5rem;
    letter-spacing: -0.5px;
}

h2 {
    font-size: 1.75rem;
    letter-spacing: -0.3px;
}

.text-color-fcfaf1 {
    color: white;
}

.text-grey-darken-1 {
    color: black;
}

.text-grey-darken-2 {
    color: grey;
}

.text-h5 {
    font-size: 1.5rem;
}

.text-h6 {
    font-size: 1.25rem;
}

.font-weight-medium {
    font-weight: 500;
}

.font-weight-regular {
    font-weight: 400;
}

.v-divider {
    margin: 2px 0;
    background-color: grey;
}

.v-card {
    margin-bottom: 5px;
    background-color: white;
}

.scale-card {
    transform: scale(1.02);
}

.card-link {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
}

.transition-transform {
    transition: all 0.3s ease;
}

.climbing-schedule {
    text-align: left;
    padding: 0 8px;
}

.time-slot {
    margin-bottom: 16px;
}

.day-header {
    color: black;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 2px;
}

.time-detail {
    padding-left: 8px;
}

.time-detail p {
    color: black;
    margin: 2px 0;
    font-weight: normal;
    font-size: 0.9rem;
}

.info-card {
    min-height: 280px;
    height: auto;
    display: flex;
    flex-direction: column;
}

.climbing-schedule {
    text-align: left;
    padding: 0 8px;
    height: 100%;
}

.responsive-title {
    font-size: 2.5rem;
}

.responsive-text {
    font-size: 1rem;
}

@media (max-width: 960px) {
    .responsive-title {
        font-size: 2rem;
    }
    
    .responsive-text {
        font-size: 0.95rem;
    }
}

@media (max-width: 600px) {
    .hero-background-container {
        /* display: none; */ /* Remove this line */
        /* Keep the background visible on mobile */
    }
    
    .responsive-title {
        font-size: 1.8rem;
    }
    
    .responsive-text {
        font-size: 0.9rem;
    }

    .v-form {
        padding: 0 10px;
    }
}

@media (max-width: 400px) {
    .responsive-title {
        font-size: 1.5rem;
    }
    
    h2 {
        font-size: 1.4rem;
    }
    
    .text-h5 {
        font-size: 1.3rem;
    }
}
</style>