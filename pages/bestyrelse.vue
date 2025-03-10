<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6" class="mx-auto">
                <v-card>
                    <v-card-title>Formand</v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="auto">
                                <v-avatar size="100" class="d-flex align-center justify-center">
                                    <nuxt-img 
                                        src="/profile-default.webp" 
                                        width="100"
                                        height="100"
                                        alt="Formand profil"
                                        loading="lazy"
                                        format="webp"
                                        quality="80"
                                        placeholder
                                        style="object-fit: cover; width: 100%; height: 100%;"
                                    />
                                </v-avatar>
                            </v-col>
                            <v-col>
                                <p>Hjalte Hundevadt</p>
                                <p>Telefon: 31981742</p>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6" class="mx-auto">
                <v-card>
                    <v-card-title>Kasserer</v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="auto">
                                <v-avatar size="100" class="d-flex align-center justify-center">
                                    <nuxt-img 
                                        src="/profile-default.webp" 
                                        width="100"
                                        height="100"
                                        alt="Kasserer profil"
                                        loading="lazy"
                                        format="webp"
                                        quality="80"
                                        placeholder
                                        style="object-fit: cover; width: 100%; height: 100%;"
                                    />
                                </v-avatar>
                            </v-col>
                            <v-col>
                                <p>Flemming Rasmussen</p>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
// Add SEO metadata for the board page
useSeoMeta({
  title: 'Bestyrelsen - Falster Klatreklub',
  ogTitle: 'Bestyrelsen - Falster Klatreklub',
  description: 'Mød bestyrelsen i Falster Klatreklub. Vores dedikerede bestyrelse arbejder for at skabe de bedste rammer for klatring på Falster.',
  ogDescription: 'Mød bestyrelsen i Falster Klatreklub. Vores dedikerede bestyrelse arbejder for at skabe de bedste rammer for klatring på Falster.',
  ogImage: 'https://falster-klatreklub.dk/profile-default.webp',
  twitterCard: 'summary',
})
</script>