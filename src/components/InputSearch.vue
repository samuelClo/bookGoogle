<template>
  <ion-header translucent>
    <ion-toolbar>
      <ion-title>Searchbar</ion-title>
    </ion-toolbar>
    <ion-toolbar>
      <ion-searchbar @input="inputText = $event.target.value" @keyup.enter="handleSubmit" placeholder="Search Favorites"></ion-searchbar>
    </ion-toolbar>
  </ion-header>
</template>


<script>
    export default {
        name: 'InputSearch',
        data: function () {
            return {
                inputText: '',
            }
        },
        methods: {
            handleSubmit() {
                this.$emit('onSubmit', this.inputText)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
