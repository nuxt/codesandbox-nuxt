<template>
  <div class="container">
    <PageBar :title="serviceName || 'Spécialité'" prec="/annuaire/specialites" />
    <div class="contacts">
      <CardButton
        v-for="(contact, index) in contacts"
        :key="index"
        :label="`${contact.job} ${contact.nom}`"
        :sublabel="`Service ${contact.service.nameSirius || contact.service.nameBasins}`"
        :to="{ name: `annuaire-specialites-specialite-contact`, params: { specialite: specialite, contact: contact.id, name: contact.nom }}"
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
      serviceName: '',
      contacts: []
    }
  },
  mounted() {
    this.serviceName = this.$route.params.name
  },
  computed: {
    specialite() {
      return this.$route.params.specialite
    }
  },
  apollo: {
    contacts: {
      query: gql`query {
        contacts: records { id nom job tel email hospital { id name } service { id nameBasins nameSirius } updatedBy { id username } updatedAt }
      }
      `
    },
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-right: 0;
  padding-left: 0;
}
.contacts {
  padding-bottom: $spacer-m;
}
</style>
