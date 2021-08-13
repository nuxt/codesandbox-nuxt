<template>
  <div class="container">
    <PageBar title="Paramètres" prec="/profil" />
    <div class="settings-body">
      <CardButton
        class="settings-item"
        v-for="(item, index) in items"
        :key="index"
        :label="item"
        to="/settings"
        fullWidth
      />
    </div>
  </div>
</template>

<script>
import PageBar from '~/components/Navigation/PageBar.vue'
import CardButton from '~/components/Cards/CardButton.vue'


export default {
  components: {
    PageBar,
    CardButton
  },
  data() {
    return {
      items: [
        'Notifications',
        'Apparence',
        'Sécurité',
        'A propos'
      ]
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
.settings-item {
  padding: 0 $spacer-l;
}
</style>
