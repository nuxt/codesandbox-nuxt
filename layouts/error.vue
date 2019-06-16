<template>
  <section>
    <div>
      <h1 v-if="error.statusCode === 404">
        Page not found |
        <span class="red">404</span>
      </h1>
      <h1 v-else>An error occurred</h1>
      <br>
      <a href="/" target="_blank" class="button--red">Back home?</a>
      <div>
        <br>
        <h4>Wizards Behind Curtains?</h4>
        <div>That's so 1939.</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["error"],
  layout: "blog"
};
</script>

<style>
.container {
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

