<template>
    <v-container>
        <section id="contact">
            <v-divider class="my-8"></v-divider>
            <v-row justify="center">
                <v-col cols="12" md="10" lg="8">
                    <v-card
                        class="pa-6 rounded-lg mx-auto"
                        elevation="1"
                        style="background-color: white;"
                    >
                        <div class="text-grey-darken-1 text-h5 font-weight-medium mb-4 text-center" style="color: black;">
                            BLIV MEDLEM
                        </div>
                        <h2 class="text-h6 font-weight-regular mb-6 text-grey-darken-2 text-center" style="color: grey;">
                            Er du interessseret i at blive medlem af Falster Klatreklub, eller har du andre spørgsmål, 
                            så kan du kontakte os her. Så vender vi hurtigst muligt tilbage. 
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
                                <v-col cols="12" class="d-flex justify-center">
                                    <v-btn
                                    :loading="loading"
                                    color="black"
                                    size="large"
                                    type="submit"
                                    variant="flat"
                                    class="px-6"
                                    aria-label="Send besked"
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
                            style="background-color: white; color: white;"
                        >
                            Tak for din besked! 
                        </v-alert>
                        
                        <v-alert
                            v-if="error"
                            type="error"
                            variant="tonal"
                            class="mt-4"
                            style="background-color: white; color: white;"
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
const formspreeUrl = ref("https://formspree.io/f/mvgzevjk");

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
</script>

<style scoped>
/* Add any specific styles for BecomeMember.vue here */
</style>