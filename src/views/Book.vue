<template>
  <div>
    <Loader :isLoading="!this.hasBook" />
    <div v-if="hasBook">
      <ion-item id="header">
                <ion-thumbnail slot="start">
        <ion-img :src="book.imageLinks.thumbnail"></ion-img>
      </ion-thumbnail>
      <ion-label>{{ book.title }}</ion-label>

      </ion-item>
      <ion-title>{{ book.title }}</ion-title>
      <ion-button>
        <router-link :to="{ name: 'Preview', params: { id: book.id } }">Voir le livre</router-link>
      </ion-button>
    </div>
  </div>
</template>

<style scoped>
/* #header {
    display: flex;
    flex-direction: column;
} */
</style>>

</style>

<script>
    import Loader from '@/components/Loader.vue'
    import { store } from "@/store.js";

    export default {
        name: 'Home',
        data: function () {
            return {
                book: {},
                hasBook: false,
            }
        },
        created() {
            const bookId = this.$route.params.id;

            try {
                store.getBookById(bookId)
                 .then(book => this.book = book)
            }
            catch {
                this.book = store.getBookById(bookId)
                this.hasBook = true
            }
        },
        components: {
            Loader,
        },
        methods: {
            async handleSubmit(text) {
                const searchBookResult = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}&orderBy=newest&maxResults=40&printType=books`, {
                    method: 'GET',
                    headers: new Headers(),
                    mode: 'cors',
                    cache: 'default'
                })
                const resultToJson = await searchBookResult.json()

                const isbnArray = resultToJson.items.map(item => item.volumeInfo.industryIdentifiers[0].identifier)
                const isbnFiltered = [...new Set(isbnArray)]

                const allResult = isbnFiltered.map(el => {
                    return resultToJson.items
                        .find(el2 => el2.volumeInfo.industryIdentifiers[0].identifier === el).volumeInfo
                })

                this.books = allResult
            },
        },
        watch: {
            book: function () {
                this.hasBook = Object.keys(this.book).length > 0
            }
        },
    }
</script>
