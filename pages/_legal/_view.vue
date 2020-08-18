<template>
   <div>
      <div class="error" v-if="error">{{error}}</div>
      {{text}}
   </div>
</template>

<script>
   export default {
      name: "_view",
      data() {
         return {
            error: undefined
         }
      },
      async asyncData() {
         try {
            const {
               data: {legal}
            } = await axios.get(`${process.env.SANDBOX_URL}api/getLegal?filter=${encodeURIComponent("/" + this.$route.params.legal + "/" + this.$route.params.view)}`);
            return {text: legal.text};
         } catch (e) {
            console.log("Error: ", e);
            this.error = "could not load data"
         }
      }
   }
</script>

<style scoped>
   .error {
      color: red;
   }
</style>
