<template>
  <section>
    <Hero/>
    <About/>
  </section>
</template>
<script>
import Hero from "~/components/Hero.vue";
import About from "~/components/About.vue";

export default {
  components: {
    Hero,
    About
  }
};
</script>
