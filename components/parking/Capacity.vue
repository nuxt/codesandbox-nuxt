<template>
   <div>
      {{capacity}}
   </div>
</template>

<script>
   export default {
      name: "Capacity",
      props: {
         free: {
            type: Number
         },
         total: {
            type: Number,
            required: true
         }
      },
      computed: {
         capacity() {
            return this.free ? `${this.free} Parkplätze frei` : `${this.total} Parkplätze`;
         }
      }
   }
</script>

<style scoped>

</style>
