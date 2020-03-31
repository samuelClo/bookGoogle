<template>
  <div>
    <Loader :isLoading="!hasBook" />
    <div v-if="hasBook">
      <ion-item>
        <ion-img :src="book.imageLinks.thumbnail"></ion-img>
        <ion-title>{{ book.title }}</ion-title>

      </ion-item>
      <ion-button>
        sdsdsd
      </ion-button>
    </div>
  </div>
</template>

<style>

</style>

<script>
    import Loader from '@/components/Loader.vue'
    import { store } from "../store.js";

    export default {
        name: 'Home',
        data: function () {
            return {
                book: {},
            }
        },
        created() {
            const bookId = this.$route.params.id;

            store.getBookById(bookId)
                .then(book => this.book = book)
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
                console.log([...new Set(isbnArray)])

                const allResult = isbnFiltered.map(el => {
                    return resultToJson.items
                        .find(el2 => el2.volumeInfo.industryIdentifiers[0].identifier === el).volumeInfo
                })

                this.books = allResult
            },
        },
        computed: {
            hasBook: function() {
                return Object.keys(this.book).length > 0
                // return false;
            }
        }
    }
</script>
