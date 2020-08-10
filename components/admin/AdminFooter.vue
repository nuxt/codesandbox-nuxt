<template>
   <div class="footer">
      <nuxt-link to="/imprint">Impressum & Datenschutz</nuxt-link>|
      <a href="mailto: contact@heylocal.de">Feedback</a>
   </div>
</template>

<script>
    export default {
        name: "AdminFooter"
    }
</script>

<style scoped>
   .footer {
      padding-top: 2em;
   }
</style>
