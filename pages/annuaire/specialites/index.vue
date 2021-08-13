<template>
  <div class="container">
    <PageBar title="Spécialités" prec="/annuaire" />
    <div class="specialites">
      <CardButton
        v-for="service in services"
        :key="service.id"
        :label="service.nameSirius || service.nameBasins"
        :to="{ name: `annuaire-specialites-specialite`, params: { specialite: service.id, name: service.nameSirius || service.nameBasins }}"
        isFullwidth
      />
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

import PageBar from '~/components/Navigation/PageBar.vue'
import CardButton from '~/components/Cards/CardButton.vue'

export default {
  components: {
    PageBar,
    CardButton
  },
  data() {
    return {
      services: [],
    }
  },
  apollo: {
    services: {
      query: gql`query {
        services {
          id
          nameBasins
          nameSirius
        }
      }`
    },
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-right: 0;
  padding-left: 0;
}
.specialites {
  padding-bottom: $spacer-m;
}
</style>
