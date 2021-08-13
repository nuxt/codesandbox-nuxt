<template>
  <div v-if="self" class="container">
    <TitleH1 data="Dashboard" />
    <Requests v-if="me" :me="me"/>
    <Internship v-if="self" :self="self"/>
    <Planning v-if="me" :me="me"/>
  </div>
</template>

<script>
import gql from 'graphql-tag'

import TitleH1 from '~/components/Text/TitleH1.vue'
import Card from '~/components/Cards/Card.vue'
import Internship from '~/components/Sections/dashboard/Internship.vue'
import Planning from '~/components/Sections/dashboard/Planning.vue'
import Requests from '~/components/Sections/dashboard/Requests.vue'

export default {
  components: {
    TitleH1,
    Card,
    Internship,
    Planning,
    Requests
  },
  mounted() {
    this.$store.commit('updateCurrentPage', 0)
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
          currentHospital { id name }
          currentService { id nameBasins nameSirius }
        }
      }
      `
    },
  },
  data() {
    return {
      cards: {
        notification: {
          title: 'Proposition d\'échange',
          text: 'Théo S. souhaite échanger une garde',
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
