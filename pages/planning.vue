<template>
<div>
  <PageTabs :tabs="tabs" :currentTab="currentTab" :setCurrentTab="updateCurrentTab" />
  <PlanningTabs v-if="me && self" :currentTab="currentTab" :me="me" :self="self" />
</div>
</template>

<script>
import gql from 'graphql-tag'

import PageTabs from '~/components/Navigation/PageTabs.vue'
import PlanningTabs from '~/components/Sections/planning/PlanningTabs.vue'
import TimePicker from '~/components/Inputs/TimePicker.vue'
import PrimaryButton from '~/components/Buttons/PrimaryButton.vue'

export default {
  components: {
    PageTabs,
    PlanningTabs,
    TimePicker,
    PrimaryButton,
  },
  mounted() {
    this.$store.commit('updateCurrentPage', 1)
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
  methods: {
    updateCurrentTab(updatedCurrentTab) {
      this.currentTab = updatedCurrentTab
    },
  },
  data() {
    return {
      currentTab: 0,
      tabs: [
        {
          name: 'Mon planning',
          action: 'showPlanning',
        },
        {
          name: 'Planning du service',
          action: 'showShifts',
        },
      ],
      modal: {
        title: 'Votre Garde',
        text: 'Que souhaitez-vous faire avec la garde du 12 février 2020 ?',
        isOpen: true
      },
    }
  },
}
</script>