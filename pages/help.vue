<template>
  <div class="container">
    <PageBar title="FAQ" prec="/profil" />
    <div class="faq-body">
      <div
        class="faq-body__item"
        v-for="(item, index) in items"
        :key="index"
      >
        <TitleH4 class="item__question" :data="item.question" @click.native="toggleItem(index)" />
        <TextP2  class="item__response" ref="response" :data="item.response" />
      </div>
    </div>
  </div>
</template>

<script>
import PageBar from '~/components/Navigation/PageBar.vue'
import TitleH4 from '~/components/Text/TitleH4.vue'
import TextP2 from '~/components/Text/TextP2.vue'

export default {
  components: {
    PageBar,
    TitleH4,
    TextP2
  },
  data() {
    return {
      items: [
        {
          question: 'Comment demander un échange de garde ?',
          response: 'Se render sur l\'onglet Planning. Sélectionner Planning de garde, puis cliquer sur l\'icône de swap à côté de votre nom dans la page. Une liste des internes de votre service vous sera proposé.'
        },
        {
          question: 'Comment demander un échange de garde ?',
          response: 'Se render sur l\'onglet Planning. Sélectionner Planning de garde, puis cliquer sur l\'icône de swap à côté de votre nom dans la page. Une liste des internes de votre service vous sera proposé.'
        },
        {
          question: 'Comment demander un échange de garde ?',
          response: 'Se render sur l\'onglet Planning. Sélectionner Planning de garde, puis cliquer sur l\'icône de swap à côté de votre nom dans la page. Une liste des internes de votre service vous sera proposé.'
        },
        {
          question: 'Comment demander un échange de garde ?',
          response: 'Se render sur l\'onglet Planning. Sélectionner Planning de garde, puis cliquer sur l\'icône de swap à côté de votre nom dans la page. Une liste des internes de votre service vous sera proposé.'
        },
        {
          question: 'Comment demander un échange de garde ?',
          response: 'Se render sur l\'onglet Planning. Sélectionner Planning de garde, puis cliquer sur l\'icône de swap à côté de votre nom dans la page. Une liste des internes de votre service vous sera proposé.'
        }
      ]
    }
  },
  methods: {
    getHeight(elem) {
      elem.style.display = 'block'
      const height = elem.scrollHeight + 'px'
      elem.style.display = ''
      return height
    },
    show(elem) {
      const height = this.getHeight(elem)
      elem.classList.add('is-visible')
      elem.style.height = height
      console.log(height)

      window.setTimeout(() => {
        elem.style.height = ''
      }, 350)
    },
    hide(elem) {
      elem.style.height = elem.scrollHeight + 'px'

      window.setTimeout(() => {
        elem.style.height = '0'
      }, 1)

      window.setTimeout(() => {
        elem.classList.remove('is-visible')
      }, 350)
    },
    toggleItem(index) {
      const elem = this.$refs.response[index].$el

      if(elem.classList.contains('is-visible')) {
        this.hide(elem)
        return
      }

      this.show(elem)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-bar-container {
  height: 76px;
}
.container {
  padding: 0 0 80px 0;
}
.faq-body {
  background: $white;

  &__item {
    padding: $spacer-l $spacer-m;
    border-bottom: solid 1px $borderGrey;

    &:last-of-type {
      border-bottom: none;
    }
  }
}
.item__question {
  margin-bottom: $spacer-s;
}
.item__response {
  display: none;
	height: 0;
	overflow: hidden;
  transition: height 350ms ease-in-out;

  &.is-visible {
    display: block;
	  height: auto;
  }
}
</style>
