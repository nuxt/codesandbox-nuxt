<template>
  <div class="flex-container-header">
    <div style="flex-grow: 1">Laenuhaldur</div>
    <div style="flex-grow: 8"><a href="?">Meist | Blog | API</a></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pealkiri: "Lanuinfo",
    };
  },
};
</script>

<style>
.flex-container-header {
  display: flex;
  align-items: stretch;
  background-color: #f1f1f1;
}
.flex-container-header > div {
  background-color: DodgerBlue;
  color: white;
  margin: 10px;
  line-height: 75px;
  font-size: 20px;
}
</style>