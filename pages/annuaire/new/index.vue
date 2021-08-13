<template>
  <div class="container">
    <PageBar title="Ajouter un contact" prec="/annuaire" />
    <div class="contact__infos">
      <StandardInput name="job" label="Profession" content="" :isEditable="isEditable" />
      <StandardInput name="nom" label="Nom" content="" :isEditable="isEditable" />
      <StandardInput name="hospital" label="Hôpital" content="" :suggestions="hospitals" :isEditable="isEditable" />
      <StandardInput name="service" label="Service" content="" :suggestions="services" :isEditable="isEditable" />
      <StandardInput name="tel" label="Tél." content="" :isEditable="isEditable" />
      <StandardInput name="email" label="Email" content="" :isEditable="isEditable" />
      <div  class="infos__editor">
        <Caption2 :data="`Par ${this.me && this.me.username}`" class="infos__editor-name" />
        <Caption1 :data="`Édité le ${formatDate(updatedAt, { lowercase: true, year: true })}`" />
      </div>
    </div>
    <div class="contact__comments" v-if="false">
      <PostCard
        v-for="(comment, index) in viewableComments"
        :key="index"
        :text="comment.text"
        :author="comment.author"
        :date="comment.date"
        :mark="comment.mark"
      />
      <AddNote v-if="isEditable" class="contact__add-note" v-on:addNote="addNote" />
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
import PostCard from '~/components/Cards/PostCard.vue'
import PrimaryButton from '~/components/Buttons/PrimaryButton.vue'
import IconButton from '~/components/Buttons/IconButton.vue'
import AddNote from '~/components/Buttons/AddNote.vue'
import Caption1 from '~/components/Text/Caption1.vue'
import Caption2 from '~/components/Text/Caption2.vue'

import { fullDate } from '~/assets/js/formatDate.js'

export default {
  components: {
    PageBar,
    StandardInput,
    PostCard,
    PrimaryButton,
    AddNote,
    IconButton,
    Caption1,
    Caption2
  },
  data() {
    return {
      updatedBy: null,
      updatedAt: null,
      contact: {},
      comments: [
        {
          text: 'Le professeur n\'est pas disponible les mercredis et jeudis',
          author: 'Aurélie M.',
          authorId: '144',
          date: '22/02/20',
          mark: 2
        }
      ],
      isEditable: true
    }
  },
  mounted() {
    this.updatedAt  = new Date()
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
              mutation createContact($job: String!, $nom: String!, $tel: String!, $email: String!, $updatedBy: ID!, $hospital: ID!, $service: ID!) {
                createRecord(input: { data: {
                    job: $job,
                    nom: $nom,
                    tel: $tel,
                    email: $email,
                    updatedBy: $updatedBy
                    hospital: $hospital,
                    service: $service,
                  } }) {
                  record { id nom }
                }
              }
            `,
            variables: {
              job,
              nom,
              tel,
              email,
              hospital: '5e7885befdd2da286fcaf03a',
              service: '5e8c4abfe64f634891be05f2',
              updatedBy: this.me.id
            }
          }).then(({ data }) => {
            console.log(data)
            this.$router.push({ name: 'annuaire-tous-contact', params: { contact: data.createRecord.record.id, name: data.createRecord.record.nom }})
          })
        }
        catch (e) {console.log(e)}
      }
    },
    addNote() {
      console.log('addNote')
    },
    formatDate(date, options) {
      return fullDate(date, options)
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
        hospitals { id name }
      }
      `
    },
    services: {
      query: gql`query {
        services { id name: nameSirius }
      }
      `
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
</style>
