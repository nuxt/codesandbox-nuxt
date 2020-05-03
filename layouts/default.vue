<template>
  <Nuxt/>
</template>
<script>
export default {
  mounted: function() {
    //Animate all elements with class animate-me
    const animateMe = document.querySelectorAll(".animate-me");

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          console.log(entry.target + "in the view");
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        } else {
          console.log("out of view");
        }
      });
    });

    animateMe.forEach(el => {
      observer.observe(el);
    });
  }
};
</script>
<style lang="scss">
@import "./assets/_mixins.scss";

html {
  font-family: "Archivo", "Helvetica Neue", Arial, sans-serif;
  font-weight: regular;
  font-size: 12px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: $black;
  @include bp(s720) {
    font-size: 14px;
  }
  @include bp(s1280) {
    font-size: 16px;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
h1,
.jf-h1 {
  @include h1;
}
h2,
.jf-h2 {
  @include h2;
}
h3,
.jf-h3 {
  @include h3;
}
h4,
.jf-h4 {
  @include h4;
}
h5,
.jf-h5 {
  @include h5;
}
h6,
.jf-h6 {
  @include h6;
}
a {
  text-decoration: none;
  color: $black;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid $black;
  }
}
p {
  line-height: 1.5;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.jf-label {
  @include label;
}
.jf-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  @include padding-top;
  @include padding-bottom;
  @include padding-left;
  @include padding-right;
}
.animate-me {
  opacity: 0;
  transform: translateY(200px);
  @include transition(all, 1s);
  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
