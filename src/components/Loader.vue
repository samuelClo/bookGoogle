<template>
  <div v-if="this.getLoading" style="background-color: white; height: 100%; width: 100%;">
    <svg version="1.1" class="loader" id="L4" xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="-25 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                    <circle stroke="none" cx="6" cy="50" r="6">
                    <animate
                      attributeName="opacity"
                      dur="1s"
                      values="0;1;0"
                      repeatCount="indefinite"
                      begin="0.1"/>
                    </circle>
      <circle stroke="none" cx="26" cy="50" r="6">
                    <animate
                      attributeName="opacity"
                      dur="1s"
                      values="0;1;0"
                      repeatCount="indefinite"
                      begin="0.2"/>
                    </circle>
      <circle stroke="none" cx="46" cy="50" r="6">
                    <animate
                      attributeName="opacity"
                      dur="1s"
                      values="0;1;0"
                      repeatCount="indefinite"
                      begin="0.3"/>
                    </circle>
                    </svg>
  </div>
</template>


<script>
    export default {
        name: 'Loader',
        data: function () {
            return {
                minTime: 200,
                maxTime: 300,
                mustLoad: false
            }
        },
        props: {
            isLoading: {
                type: Boolean,
                required: true,
            },
        },
        mounted() {
            if (!this.isLoading)
                return

            setTimeout(() => { this.mustLoad = true }, this.minTime)
            setTimeout(() => { this.mustLoad = true }, this.minTime)
        },
        computed: {
            getLoading: function() {
                console.log((this.mustLoad && this.isLoading))
                return (this.mustLoad && this.isLoading)
            }
        }
    }
</script>

<style scoped>
  .loader {
    fill: #ffaa8e;
    height: 200px;
    width: 200px;
    position: absolute;
    top: 25%;
    right: 50%;
    transform: translate(50%, 50%);
  }
</style>
