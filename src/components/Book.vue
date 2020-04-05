<template>
  <ion-card>
    <img v-if="thumbnailUrl" :src="thumbnailUrl"/>
    <ion-card-header>
      <ion-card-title>{{ title }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      {{ description }}
    </ion-card-content>
    <router-link :to="{ name: 'Book', params: { id } }">Voir le livre</router-link>
  </ion-card>

</template>


<script>
    export default {
        data: function () {
            return {
                inputText: '',
            }
        },
        props: {
            authors: {
                type: Array,
            },
            title: {
                type: String,
            },
            description: {
                type: String,
            },
            thumbnailUrl: {
                type: String,
            },
            id: {
                type: String,
            }
        },
        methods: {},
        mounted() {
            window.addEventListener("load", function (event) {
                console.log("Toutes les ressources sont chargées !");
            });
        }
    }
</script>


<style scoped>

</style>
