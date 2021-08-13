<template>
  <div class="container">
    <TitleH1 data="Mon profil" />
    <Card
      v-if="me && self"
      :title="me.username"
      :text="self.email"
    />
    <Card
      v-if="self"
      eyebrow="Stage en cours"
      :title="`Stage à l'${self.currentHospital.name}`"
      :text="self.currentService.nameBasins || self.currentService.nameSirius"
      :buttons="[
        {
          label: 'Voir mes insertions passées',
          to: '/stages/liste',
        }
      ]"
    />
    <Card
      :buttons="[
        {
          label: 'Paramètres',
          to: '/settings',
        },
        {
          label: 'Aide & FAQ',
          to: '/help',
        },
      ]"
    />
    <Card
      :buttons="[
        {
          label: 'Se déconnecter',
          to: '/settings',
        }
      ]"
    />
  </div>
</template>

<script>
import gql from 'graphql-tag'

import { fullDate } from '~/assets/js/formatDate.js'

import TitleH1 from '~/components/Text/TitleH1.vue'
import Card from '~/components/Cards/Card.vue'

export default {
  components: {
    TitleH1,
    Card
  },
  data() {
    return {
      me: null,
      self: null,
    }
  },
  mounted() {
    this.$store.commit('updateCurrentPage', 3)
  },
  methods: {
    formatDate(date) {
      return fullDate(date)
    }
  },
  apollo: {
    me: {
      query: gql`query {
        me { id username }
      }
      `
    },
    self: {
      query: gql`query {
        self {
          email
          currentHospital { id name }
          currentService { id nameBasins nameSirius }
        }
      }
      `
    },
  },
}
</script>

<style>

</style>
