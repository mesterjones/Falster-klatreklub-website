<template>
    <v-container class="home-container">
        <v-row>
            <v-col>
                <v-card class="mx-auto mt-16 pa-6" max-width="800" elevation="0" color="#FCFAF1">
                    <div class="text-center">
                        <h1 class="primary-text mb-6">Velkommen til Falster Klatreklub</h1>
                        <p class="primary-text text-body-1" style="white-space: pre-line">
                            Vi er en lille, hyggelig klub med plads til alle – uanset om du er nybegynder eller erfaren klatrer.

                            For kun 500 kr. om året kan du blive medlem og få fri adgang. <br>
                        </p>
                        <v-btn 
                        color="#3A4A30"
                        class="primary-text mt-4">Bliv medlem</v-btn>
                        <v-img
                            src="/bouldering1.jpg"
                            class="mt-6"
                            max-height="300"
                            cover
                        ></v-img>
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
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';

const contactInfo = [
    { icon: 'mdi-home', text: 'Falster Klatreklub' },
    { icon: 'mdi-map-marker', text: 'Stubbekøbingvej 24' },
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