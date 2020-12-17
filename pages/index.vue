<template>
  <section>
    <div>
      <v-layout>
        <v-flex
          v-for="(gorsel, gorselIndex) in gorseller"
          :key="gorselIndex"
          class="ma-2"
          style="margin-right: 10px"
          @click="index = gorselIndex"
        >
          <img width="180" height="180" :src="gorsel.url" class="resimKutusu" />
        </v-flex>
        <LightGallery
          :images="gorseller"
          :index="index"
          :disable-scroll="false"
          @close="index = null"
        />
      </v-layout>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    gorseller: [
      { title: "img 1", url: "https://picsum.photos/500/300?image=1" },
      { title: "img 2", url: "https://picsum.photos/500/300?image=2" },
    ],
    index: null,
  }),
  components: {},
};
</script>

<style scoped>
.resimKutusu {
  border: 1px solid #cdcdcd;
  padding: 5px;
  background: #eeeeee;
  border-radius: 5px;
  cursor: pointer;
}
</style>
