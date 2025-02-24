<template>
    <v-container>
        <section id="home">
            <v-row>
                <v-col
                    class="d-flex align-center justify-center"
                    style="background: url('/bouldering1.jpg') center/cover no-repeat; height:50vh;"
                    >
                    <v-card class="mx-auto pa-6" width="800" elevation="0">
                        <div class="text-center" >
                        <h1 class="primary-text mb-6">Velkommen til Falster Klatreklub</h1>
                        <p class="primary-text text-body-1" style="white-space: pre-line">
                            Vi er en lille, hyggelig klub med plads til alle – uanset om du er nybegynder eller erfaren klatrer.

                            For kun 500 kr. om året kan du blive medlem og få fri adgang. <br>
                        </p>
                        <v-btn 
                        color="#3A4A30"
                        class="primary-text mt-4">Bliv medlem</v-btn>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify="center" class="mt-8" style="max-width: 1000px; margin: 0 auto;">
                <v-col cols="12" md="5">
                    <v-card class="mx-auto pa-4" width="400" elevation="0" color="#3A4A30" rounded="lg">
                        <div class="text-center">
                            <h2 class="text-color-fcfaf1 mb-4">Træningstider</h2>
                            <v-list density="compact" class="bg-transparent pa-0">
                                <v-list-item>
                                    <v-list-item-title class="text-color-fcfaf1">
                                        Tirsdag: 17-21 (familieklatring 17-19)
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title class="text-color-fcfaf1">
                                        Torsdag: 18-21
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title class="text-color-fcfaf1">
                                        Søndag: 10-14
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="12" md="5">
                    <v-card class="mx-auto pa-4" width="400" elevation="0" color="#3A4A30" rounded="lg">
                        <div class="text-center">
                            <h2 class="text-color-fcfaf1 mb-4">Find os her</h2>
                            <v-list density="compact" bg-color="transparent" class="pa-0 mx-auto" width="fit-content">
                                <v-list-item v-for="(item, i) in contactInfo" :key="i">
                                    <template v-slot:prepend>
                                        <v-icon :icon="item.icon" color="#FCFAF1" size="small"></v-icon>
                                    </template>
                                    <v-list-item-title class="text-color-fcfaf1 ms-2">
                                        {{ item.text }}
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </div>
                        <v-divider></v-divider>
                    </v-card>
                </v-col>
            </v-row>
        </section>
    </v-container>
    <v-container>
        <section id="about">
            <v-row>
                <v-col cols="12" md="8">
                    <div class="text-grey-lighten-1 text-h5 font-weight-light mb-4 ga-sm-10">
                        OM OS
                    </div>
                    <p>
                        Falster Klatreklub er en hyggelig lille forening med gode faciliteter og en åben atmosfære. 
                        Her er mulighed for, at lære om klatring, teknikker og udstyr, samt en anderledes måde, at bruge kroppen på og komme i form. 
                        Vores primære fokus er på klatredisciplinen bouldering, teknisk klatring i lav højde, men vi har også en 8m rebvæg hvor man 
                        kan lære om rebklatring og sikringsteknikker. Aftener i klubben er præget af godt samvær om klatring i fællesskab, sparring og udfordringer, 
                        samt kaffe og hygge. <br><br>

                        Som medlem er der fri adgang til klubben alle ugens dagen. Derudover er der træning 3 gang om ugen. <br><br>

                        Foreningen vægter medlemsinddragelse højt og derfor er der rig mulighed for at være med til, at forme hvad der skal ske i klubben. <br><br>

                        Udover de ugentlige aftener, planlægger vi flere gange om året ture til større klatreklubber, eks. Blocks & Walls i København, eller ture ud i naturen til klatring på rigtige klipper. <br><br>

                        Det er gratis at besøge klubben og prøve klatringen af et par gange, og skulle man blive glad for det, så er medlemsskabet billigt. 
                        500 for et årligt medlemskab og har man familiemedlemmer koster hvert ekstra familiemedlem i samme husstand 100 DKK om året. <br><br>

                        Lyder det som noget for dig, eller har du spørgsmål så kan vi kontaktes via formularen herunder. Du kan også besøge os på Facebook lige her
                    </p>
                </v-col>
            </v-row>
        </section>
    </v-container>
    <v-container>
        <section id="contact">
            <v-row>
                <v-col>
                    <v-card
                        class="pa-8 rounded-lg"
                        elevation="0"
                        color="transparent"
                        >
                        <div class="text-grey-lighten-1 text-h5 font-weight-light mb-4">
                            CONTACT
                        </div>
                        <h2 class="text-h6 font-weight-light mb-8 text-grey-darken-1">
                            Udfyld formularen nedenfor, så vender vi tilbage hurtigst muligt.
                        </h2>
                        
                        <v-form ref="contactForm" @submit.prevent="submitForm" class="mt-6">
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
                                    <v-btn
                                    :loading="loading"
                                    color="primary"
                                    size="x-large"
                                    type="submit"
                                    variant="flat"
                                    class="px-8"
                                    >
                                    Send besked
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>

                        <v-alert
                            v-if="success"
                            type="success"
                            variant="tonal"
                            class="mt-4"
                        >
                            Tak for din besked! Jeg vender tilbage hurtigst muligt.
                        </v-alert>
                        
                        <v-alert
                            v-if="error"
                            type="error"
                            variant="tonal"
                            class="mt-4"
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

const formData = ref({
  name: "",
  email: "",
  message: "",
});
const loading = ref(false);
const success = ref(false);
const error = ref(false);
const formspreeUrl = ref("https://formspree.io/f/mnnjoeaz");

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
    { icon: 'mdi-map-marker', text: 'Industrivej 10' },
    { icon: 'mdi-city', text: '4800 Nykøbing F' }
];

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap');

.home-container {
    background-color: #FCFAF1;
    min-height: 100vh;
    min-width: 100vw;
    font-family: 'Open Sans', sans-serif;
}

.primary-text {
    color: #202721;
}

h1, h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
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
    color: #FCFAF1;
}
</style>