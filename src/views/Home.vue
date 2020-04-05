<template>
  <div class="home">
    <ion-app>
      <InputSearch @onSubmit="handleSubmit"/>
      <ion-content>
        <Book
          v-for="book in sharedState.state.books" :key="book.industryIdentifiers[0].identifier"
          :authors="book.authors"
          :title="book.title"
          :description="book.description"
          :thumbnailUrl="book.imageLinks ? book.imageLinks.smallThumbnail : ''"
          :id="book.industryIdentifiers[0].identifier"
        />
      </ion-content>
    </ion-app>
  </div>
</template>
<style>
  .sc-ion-card-md-s img {
    height: 200px;
    object-fit: contain;
  }

  ion-card-content {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card-content-md {
    padding-bottom: unset;
  }
</style>
<script>
    import InputSearch from '@/components/InputSearch.vue'
    import Book from '@/components/Book.vue'

    import { store } from "@/store.js";

    export default {
        name: 'Home',
        data: () => {
            return {
                sharedState: store
            }
        },
        components: {
            InputSearch,
            Book
        },
        methods: {
            handleSubmit(text) {
              store.addBooks(text)
            }
        },
        mounted() {
            window.addEventListener("load", function (event) {
                // console.log('jejeje')
            });
        }
    }
</script>
