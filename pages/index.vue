<template>
  <Dice />
</template>

<script>
import Dice from "~/components/dice.vue";

export default {
  components: {
    Dice
  }
};
</script>

<style>
body {
  min-height: 100vh;
  margin: 0;
  background: #dadada;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
