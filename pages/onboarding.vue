<template>
  <div class="onboarding">
    <TitleH2
      :data='slides[currentSlide].title'
    />
    <div class="slider">
      <div 
        class="slider__slide"
        v-for="(slide, index) in slides"
        :key="index"
        :class="{'isLeft': index < currentSlide, 'isRight': index > currentSlide}"
      >
        <img :src="slide.imgSrc" :alt="`Onboarding slide ${index+1}`">
      </div>
    </div>
    <PrimaryButton
      :label="isLastSlide() ? 'C\'est parti !' : 'Suivant'"
      :action="isLastSlide() ? null : () => currentSlide++"
      :to="isLastSlide() ? '/dashboard' : null"
    />
  </div>
</template>

<script>
import TitleH2 from '~/components/Text/TitleH2'
import PrimaryButton from '~/components/Buttons/PrimaryButton'
export default {

  // mounted() {
  //   this.$router.push('/dashboard')
  // },
  layout: 'empty',
  components: {
    TitleH2,
    PrimaryButton
  },
  data() {
    const path = '/uploads/images/onboarding/onboarding-'
    return {
      currentSlide: 0,
      slides: [
        {
          title: 'Une app, plusieurs besoins',
          imgSrc: `${path}1.png`
        },
        {
          title: 'Gérer votre planning',
          imgSrc: `${path}2.png`
        },
        {
          title: 'Gérer votre planning',
          imgSrc: `${path}3.png`
        },
        {
          title: 'Échanger une garde',
          imgSrc: `${path}4.png`
        },
        {
          title: 'Échanger une garde',
          imgSrc: `${path}5.png`
        },
        {
          title: 'Rechercher dans l\'annuaire',
          imgSrc: `${path}6.png`
        },
        {
          title: 'Le mot de la fin',
          imgSrc: `${path}7.png`
        },
      ]
    }
  },
  methods: {
    isLastSlide() {
      return this.currentSlide == this.slides.length - 1
    }
  }
}
</script>

<style lang="scss" scoped>
.onboarding {
  padding-top: $spacer-xxxl;
  padding-bottom: $spacer-m;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  height: 100vh;
}
.slider {
  flex: 1;
  width: 100%;
  margin: $spacer-xxl 0;
  position: relative;
  &__slide {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    transition: transform $duration-m $ease-basic;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    &.isLeft {
      transform: translateX(-100%);
    }
    &.isRight {
      transform: translateX(100%);
    }
  }
}
.primary-button, .title-h2 {
  margin: 0 $spacer-m;
}
.title-h2 {
  text-align: center;
}
</style>
