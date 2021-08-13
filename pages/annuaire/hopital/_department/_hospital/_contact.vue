<template>
  <div class="container">
    <PageBar v-if="!isEditable" :title="contact && contact.nom" :prec="`/annuaire/hopital/${dept}/${hospital}`" hasEdit v-on:edit="editMode()" />
    <PageBar v-else :title="contact.nom" :precAction="quitEditMode" />
    <div class="contact__infos" v-if="contact">
      <StandardInput v-model="contact.job" name="job" label="Profession" :content="contact.job" :isEditable="isEditable" required />
      <StandardInput v-model="contact.nom" name="nom" label="Nom" :content="contact.nom" :isEditable="isEditable" required />
      <StandardInput v-model="contact.hospital" :suggestions="hospitals" name="hospital" label="Hôpital" :content="contact.hospital.name" :isEditable="isEditable" required />
      <StandardInput v-model="contact.service" :suggestions="services" name="service" label="Service" :content="contact.service.nameSirius || contact.service.nameBasins" :isEditable="isEditable" required />
      <StandardInput v-model="contact.tel" name="tel" label="Tél." :content="contact.tel" :isEditable="isEditable" />
      <StandardInput v-model="contact.email" name="email" label="Email" :content="contact.email" :isEditable="isEditable" />
      <div v-if="!isEditable" class="infos__editor">
        <Caption2 :data="(contact && contact.updatedBy) || updatedBy ? `Par ${updatedBy || contact.updatedBy.username}` : ''" class="infos__editor-name" />
        <Caption1 :data="(contact && contact.updatedAt) || updatedAt ? `Édité le ${formatDate(updatedAt || contact.updatedAt, { lowercase: true, year: true })}` : ''" />
      </div>
    </div>
    <div class="contact__comments" v-if="false">
      <PostCard
        v-for="(comment, index) in viewableComments"
        :key="index"
        :text="comment.text"
        :author="comment.author"
        :date="`${formatDate(comment.date)}`"
        :mark="comment.mark"
        :isDeletable="isEditable ? true : false"
        @deleteCard="deleteComment(index)"
      />
      <AddNote v-if="isEditable" class="contact__add-note" v-on:addNote="addNote" />
      <ScrollableModal :isOpen="noteModalOpen" :closeAction="closeNewNote" >
        <EditableField class="add-note__body" slot="body" :data="noteContent ? noteContent : ''" placeholder="Ecrivez une note..." @update="onNoteInput($event)"/>
        <PrimaryButton slot="actions" label="Valider" :action="validateNote" />
      </ScrollableModal>
    </div>
    <div v-if="isEditable" class="contact__save">
      <PrimaryButton label="Sauvegarder" :action="save" />
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

import PageBar from '~/components/Navigation/PageBar.vue'
import StandardInput from '~/components/Inputs/StandardInput.vue'
import EditableField from '~/components/Inputs/EditableField.vue'
import PostCard from '~/components/Cards/PostCard.vue'
import PrimaryButton from '~/components/Buttons/PrimaryButton.vue'
import IconButton from '~/components/Buttons/IconButton.vue'
import AddNote from '~/components/Buttons/AddNote.vue'
import Caption1 from '~/components/Text/Caption1.vue'
import Caption2 from '~/components/Text/Caption2.vue'
import ScrollableModal from '~/components/Modals/ScrollableModal.vue'

import { fullDate } from '~/assets/js/formatDate.js'

export default {
  components: {
    PageBar,
    StandardInput,
    EditableField,
    PostCard,
    PrimaryButton,
    AddNote,
    IconButton,
    Caption1,
    Caption2,
    ScrollableModal
  },
  data() {
    return {
      updatedBy: null,
      updatedAt: null,
      comments: [
        {
          text: 'Le professeur n\'est pas disponible les mercredis et jeudis',
          author: 'Aurélie M.',
          authorId: '144',
          date: '22/02/20',
          mark: 2
        }
      ],
      isEditable: false,
      noteModalOpen: false,
      noteContent: null
    }
  },
  computed: {
    dept() {
      return this.$route.params.department
    },
    hospital() {
      return this.$route.params.hospital
    },
    contactName() {
      return this.$route.params.name
    },
    viewableComments() {
      if(this.isEditable) {
        return this.comments.filter(comment => comment.authorId === this.me.id)
      } else {
        return this.comments
      }
    }
  },
  methods: {
    editMode() {
      this.isEditable = true
    },
    async save() {
      const form = document.querySelector('.contact__infos')
      if (form) {
        const job = form.querySelector('.form-job').value
        const nom = form.querySelector('.form-nom').value
        const hospital = form.querySelector('.form-hospital').value
        const service = form.querySelector('.form-service').value
        const tel = form.querySelector('.form-tel').value
        const email = form.querySelector('.form-email').value

        console.log(job, nom, tel, email)

        try {
          const res = await this.$apollo.mutate({
            mutation: gql`
              mutation updateContact($id: ID!, $job: String!, $nom: String!, $tel: String!, $email: String!, $updatedBy: ID!) {
                updateRecord(input: { where: { id: $id }, data: {
                    job: $job,
                    nom: $nom,
                    tel: $tel,
                    email: $email,
                    updatedBy: $updatedBy
                  } }) {
                  record { id }
                }
              }
            `,
            variables: {
              id: this.contact.id,
              job,
              nom,
              tel,
              email,
              updatedBy: this.me.id
            }
          }).then(({ data }) => {
            this.updatedBy = this.me.username
            this.updatedAt = new Date()
            this.isEditable = false
          })
        }
        catch (e) {}
      }
    },
    quitEditMode() {
      this.isEditable = false
    },
    addNote() {
      this.noteModalOpen = true
    },
    formatDate(date, options) {
      return fullDate(date, options)
    },
    closeNewNote() {
      this.noteContent = null
      this.noteModalOpen = false
    },
    onNoteInput(textContent) {
      this.noteContent = textContent
    },
    validateNote() {
      // TO-DO: Save this.noteContent to API with username and date
      this.comments.push(
        {
          text: this.noteContent,
          author: this.me.username,
          authorId: this.me.id,
          date: new Date().toString(),
          mark: 0
        }
      )

      this.noteContent = null
      this.noteModalOpen = false
    },
    deleteComment(index) {
      // TO-DO : Delete comment in api
      this.comments.splice(this.comments.indexOf(this.comments.filter(comment => comment.authorId === this.me.id)[index].message), 1)
    }
  },
  apollo: {
    me: {
      query: gql`query {
        me { id username }
      }
      `
    },
    hospitals: {
      query: gql`query {
        hospitals {
          id
          name
        }
      }
      `
    },
    services: {
      query: gql`query {
        services {
          id
          name: nameSirius
        }
      }
      `
    },
    contact: {
      query: gql`query($id: ID!) {
        contact: record(id: $id) {
          id nom job tel email hospital { id name } service { id nameBasins nameSirius } updatedBy { id username } updatedAt
        }
      }`,
      variables() {
        return {
          id: this.$route.params.contact
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.contact__edit {
  position: fixed;
  top: 28px;
  right: $spacer-m;
}
.infos__editor {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: $spacer-s;
  margin-bottom: $spacer-m;

  &-name {
    margin-right: $spacer-s;
  }
}
.contact__add-note {
  margin: $spacer-s 0;
}
.contact__save {
  margin-top: 16px;
}
.add-note__body {
  height: 32px;
  padding: $spacer-l;
}
</style>
