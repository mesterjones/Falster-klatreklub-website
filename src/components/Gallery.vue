<template>
    <v-container>
        <v-row>
            <v-col
                v-for="n in 9"
                :key="n"
                cols="12"
                sm="4"
                md="4"
            >
                <v-card>
                    <v-img
                        :src="'https://via.placeholder.com/150?text=Image+' + n"
                        aspect-ratio="1"
                    ></v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Gallery'
}
</script>