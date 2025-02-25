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
                    <v-icon
                        large
                        class="mx-auto my-4"
                    >
                        mdi-image
                    </v-icon>
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