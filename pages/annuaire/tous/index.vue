<template>
  <div class="container">
    <PageBar :title="hospitalName || 'Hôpital'" :prec="dept ? `/annuaire/hopital/${dept}` : '/annuaire/hospital'" />
    <div class="contacts">
      <CardButton
        v-for="(contact, index) in contacts"
        :key="index"
        :label="`${contact.job} ${contact.nom}`"
        :sublabel="`Service ${contact.service.nameSirius || contact.service.nameBasins}`"
        :to="{ name: `annuaire-hopital-department-hospital-contact`, params: { hospital: hospital, department: dept, contact: contact.id, name: contact.nom }}"
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
      hospitalName: '',
      contacts: []
    }
  },
  mounted() {
    this.hospitalName = this.$route.params.name
  },
  computed: {
    dept() {
      return this.$route.params.department
    },
    hospital() {
      return this.$route.params.hospital
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
