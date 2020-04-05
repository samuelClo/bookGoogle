<template>
    <div id="viewerCanvas" style="width: 100%; height: 100%"></div>
</template>

<style scoped>

</style>

<script>
    export default {
        name: 'Preview',
        methods: {
            initialize() {
                const bookId = this.$route.params.id;

                console.log("initialize -> bookId", bookId)
                const viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));

                viewer.load(bookId)
            },
        },
        mounted() {
                console.log(this)
                setTimeout(() => { this.initialize() }, 1000)
        }
    }
</script>


