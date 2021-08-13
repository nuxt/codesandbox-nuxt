<template>
  <div class="container">
    <PageBar :title="`Hôpitaux${deptNames[dept] ? ` : ${deptNames[dept]}` : ''}`" prec="/annuaire/hopital" />
    <div class="hospitals">
      <CardButton
        v-for="hospital in hospitals"
        :key="hospital.id"
        :label="hospital.name"
        :to="{ name: `annuaire-hopital-department-hospital`, params: { hospital: hospital.id, name: hospital.name }}"
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
      hospitals: [],
      deptNames: {
        "d75": "Paris",
        "d92": "Hauts-de-Seine",
        "d93": "Seine-Saint-Denis",
        "d94": "Val-de-Marne",
        "d77-d78-d91-d95": "Autres en Île-de-France",
        "autres": "Autres départements"
      }
    }
  },
  computed: {
    dept() {
      return this.$route.params.department
    }
  },
  apollo: {
    hospitals: {
      query() {
        if (this.dept === 'd75' || this.dept === 'd92' || this.dept === 'd93' || this.dept === 'd94') {
          return gql`query ($dept: Int!) {
            hospitals(where: { dept: $dept }) {
              id
              name
            }
          }`
        }
        else if (this.dept === 'd77-d78-d91-d95') {
          return gql`query ($idfDepts: [Int]!) {
            hospitals(where: { dept_in: $idfDepts }) {
              id
              name
            }
          }`
        }
        else {
          return gql`query ($frDepts: [Int]!) {
            hospitals(where: { dept_nin: $frDepts }) {
              id
              name
            }
          }`
        }
      },
      variables() {
        return {
          dept: parseInt(this.dept.replace(/\D/g,'')),
          idfDepts: [77, 78, 91, 95],
          frDepts: [75, 92, 93, 94, 77, 78, 91, 95],
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-right: 0;
  padding-left: 0;
}
.hospitals {
  padding-bottom: $spacer-m;
}
</style>
