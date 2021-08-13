<template>
  <div class="container">
    <PageBar title="Hôpitaux" prec="/annuaire" />
    <div class="departments">
      <CardButton
        v-for="department in departments"
        :key="department.id"
        :label="department.label"
        :to="`/annuaire/hopital/${department.id}`"
        isFullwidth
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
      departments: [
        {
          label: 'Paris',
          id: 'd75'
        },
        {
          label: 'Hauts-de-Seine',
          id: 'd92'
        },
        {
          label: 'Seine-Saint-Denis',
          id: 'd93'
        },
        {
          label: 'Val-de-Marne',
          id: 'd94'
        },
        {
          label: 'Autres départements d\'IDF',
          id: 'd77-d78-d91-d95'
        },
        {
          label: 'Autres départements français',
          id: 'autres'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-right: 0;
  padding-left: 0;
}
.departments {
  padding-bottom: $spacer-m;
}
</style>
