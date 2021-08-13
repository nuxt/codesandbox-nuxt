<template>
  <div v-if="self" class="container">
    <div class="top-wrapper">
      <h1 class="title">Annuaire</h1>
      <SearchBar :suggestions="contacts"/>
    </div>
    <CardButton
      class="current-hospital"
      icon="annuaire/current-hospital"
      :label="self.currentHospital.name"
      :to="{ name: `annuaire-hopital-department-hospital`, params: { department: dept, hospital: self.currentHospital.id, name: self.currentHospital.name }}"
      isFullwidth
    />
    <div class="mid-wrapper">
      <CardButton
        icon="annuaire/hospitals"
        label="Hôpitaux"
        to="/annuaire/hopital"
        isFullwidth
      />
      <CardButton
        icon="annuaire/specialities"
        label="Spécialités"
        to="/annuaire/specialites"
        isFullwidth
      />
      <CardButton
        icon="annuaire/jobs"
        label="Tous les contacts"
        to="/annuaire/tous"
        isFullwidth
      />
    </div>
    <div class="bot-wrapper">
      <PrimaryButton
        to="/annuaire/new"
        label="Ajouter un contact"
      />
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

import TitleH1 from '~/components/Text/TitleH1.vue'
import SearchBar from '~/components/Inputs/SearchBar.vue'
import CardButton from '~/components/Cards/CardButton.vue'
import PrimaryButton from '~/components/Buttons/PrimaryButton.vue'

export default {
  components: {
    TitleH1,
    SearchBar,
    CardButton,
    PrimaryButton
  },
  data() {
    return {
      title: 'Annuaire',
      contacts: []
    }
  },
  mounted() {
    this.$store.commit('updateCurrentPage', 2)
  },
  computed: {
    dept() {
      const deptNum = this.self.currentHospital.dept
      if (deptNum === 75 || deptNum === 92 || deptNum === 93 || deptNum === 94) {
        return `d${deptNum}`
      }
      else if (deptNum === 77 || deptNum === 78 || deptNum === 91 || deptNum === 95) {
        return 'd77-d78-d91-d95'
      }
      else {
        return 'others'
      }
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
          currentHospital { id name dept }
          currentService { id nameBasins nameSirius }
        }
      }
      `
    },
    contacts: {
      query: gql`query {
        contacts: records {
          id name: nom
        }
      }
      `
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0;
}
.top-wrapper {
  padding: 0 $spacer-m;
}
.mid-wrapper {
  margin-bottom: $spacer-xxxl;
}
.bot-wrapper {
  padding: 0 $spacer-m;
}
.title {
  @include f_h1;

  margin: $spacer-xxl 0 $spacer-l 0;
}
.current-hospital {
  margin: $spacer-xl 0;
}
</style>
