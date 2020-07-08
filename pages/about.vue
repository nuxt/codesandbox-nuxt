<template>
  <div class="container">
    <nuxt-link to="/">
      <div class="button"/>
    </nuxt-link>

    <div class="grid">
      <img class="img-hero" :src="require('~/assets/foto-projeto.png')">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
}

.button {
  width: 30px;
  height: 30px;
  position: fixed;
  background-color: red;
  top: 0;
  right: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  width: calc(100% - 40px);
  margin: 100px 0px 100px 50%;
  transform: translateX(-50%);
}

.img-hero {
  grid-column: 1/6;
}
</style>
