<template>
  <div class="container">
    <PageBar :title="title" :prec="precedentPage" />
    <Posts v-if="me && self" :self="self" :me="me" whichInformations="service" />
    <MaterialSingleButton :action="addInfo" label="news edition" icon="pen.svg" />
    <ScrollableModal :isOpen="isNoteModalOpen" :closeAction="closeInfoModal" title="Nouvelle information">
      <EditableField class="add-note__body" slot="body" :data="noteContent ? noteContent : ''" placeholder="Ecrivez une note..." @update="onNoteInput"/>
      <PrimaryButton slot="actions" label="Valider" :action="validateNote" />
    </ScrollableModal>
  </div>
</template>

<script>
import gql from 'graphql-tag'

import PageBar from '~/components/Navigation/PageBar.vue'
import Posts from '~/components/Sections/informations/Posts.vue'
import MaterialSingleButton from '~/components/Buttons/MaterialSingleButton.vue'
import EditableField from '~/components/Inputs/EditableField.vue'
import ScrollableModal from '~/components/Modals/ScrollableModal.vue'
import PrimaryButton from '~/components/Buttons/PrimaryButton.vue'

export default {
  components: {
    PageBar,
    Posts,
    MaterialSingleButton,
    EditableField,
    ScrollableModal,
    PrimaryButton
  },
  data() {
    return {
      title: 'Informations',
      precedentPage: '/dashboard',
      isNoteModalOpen: false,
      noteContent: null,
    }
  },
  methods: {
    addInfo() {
      this.isNoteModalOpen = true
    },
    closeInfoModal() {
      this.isNoteModalOpen = false
      this.noteContent = null
    },
    async validateNote() {
      try {
        const res = await this.$apollo.mutate({
          mutation: gql`
            mutation createInfo($author: ID!, $hospital: ID!, $text: String!) {
              createInformation(
                input: { data: { author: $author, hospital: $hospital, text: $text } }
              ) {
                information {
                  id
                }
              }
            }
          `,
          variables: {
            author: this.me.id,
            hospital: this.self.currentHospital.id,
            text: this.noteContent
          }
        }).then(({ data }) => {
          this.closeInfoModal()
          this.$router.go({path:'/service/informations', force: true})
          this.whichInformations = null
        })
      }
      catch (e) {}
    },
    onNoteInput(textContent) {
      this.noteContent = textContent
    },
  },
  apollo: {
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
  }
}
</script>

<style lang="scss" scoped>
.add-note__body {
  height: 32px;
  padding: $spacer-l;
}
</style>
