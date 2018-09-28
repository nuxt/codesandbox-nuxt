<template>
  <div class="container">
    <div>
      <h2>Hello from {{ name }}</h2>
      <p><nuxt-link to="/">Back home</nuxt-link></p>
    </div>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      name: (process.server ? 'server' : 'client')
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
p {
  margin-top: 10px;
}
a {
  color: #41B883;
}
a:hover {
  color: #3B8070;
}
</style>