<template>
  <div class="container">
    <PageBar title="Insertions passées" prec="/profil" />
    <div
      v-if="items.length > 0"
      class="stages-list"
    >
      <CardButton
        class="stages-item"
        v-for="(item, index) in items"
        :key="index"
        :label="item.name"
        to="/stages/liste"
        fullWidth
      />
    </div>
    <div v-else class="stages-first">
      <TitleH4 class="stages-first__title" data="C'est votre premier stage !" />
      <TextP2 data="Réalisez davantage de stage afin de retrouver ici la liste de vos stages déjà réalisés." />
    </div>
  </div>
</template>

<script>
import PageBar from '~/components/Navigation/PageBar.vue'
import CardButton from '~/components/Cards/CardButton.vue'
import TitleH4 from '~/components/Text/TitleH4.vue'
import TextP2 from '~/components/Text/TextP2.vue'


export default {
  components: {
    PageBar,
    CardButton,
    TitleH4,
    TextP2
  },
  data() {
    return {
      items: []
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0;
}
.page-bar-container {
  height: 76px;
}
.stages-item {
  padding: 0 $spacer-l;
}
.stages-first {
  height: calc(100vh - 64px - 76px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 $spacer-l;

  &__title {
    margin-bottom: $spacer-s;
  }
}
</style>
