<template>
  <div class="container">
    <div>
      <h1>Hello!</h1>
      <p>Remember that this is not any normal bot. This can be used outside of Discord for special uses.</p>
      <p>
        <NLink to="/" class="button--grey">Back home</NLink>
      </p>
      <div class="blank space500">owo</div>
      <p>DOWN HERE!</p>
      <h1>Welcoming</h1>
    </div>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      name: process.server ? "server" : "client"
    };
  }
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.blank {
  background-color: transparent;
  color: transparent;
}
.space500 {
  margin: 500px;
}
h1 {
  font-weight: 400;
}
p {
  margin-top: 20px;
}
</style>
