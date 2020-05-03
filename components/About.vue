<template>
  <section class="about">
    <div class="jf-container">
      <div class="content">
        <h2 class="jf-h1">About me</h2>
        <h3>I am a web designer and developer, I love creating beautiful, animated websites that are also fast, and performant.</h3>
        <p>Follow bits and parts of projects I’m currently working on in Twitter and Instagram, full case studies in Behance and a complete resume on Linkedin.Back in 2009 I co-founded Royale Studios, a world class digital agency where I currently work as an Art & Creative director.</p>
        <p>I've had the privilege of working for wide range of companies; from startups like Kingo and, to big organizations like Emisoras Unidas, BAM and Tacobell.</p>
      </div>
      <div class="image-container animate-me">
        <img class="image" src="~/static/me_working_hard.jpg" alt="Javier Castillo working hard">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "./assets/_mixins.scss";

.jf-container {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.content {
  position: relative;
  @include padding-right;
  @include padding-bottom;
  @include bp(s360) {
    padding-top: 80px;
    width: 75%;
  }
  @include bp(s720) {
    padding-top: 160px;
    width: 70%;
    @include padding-bottom;
  }
  @include bp(s960) {
    width: 60%;
  }
  @include bp(s1280) {
    padding-top: 220px;
  }
  h2,
  h3 {
    margin-bottom: 20px;
    @include bp(s480) {
      margin-bottom: 40px;
    }
    @include bp(s960) {
      margin-bottom: 60px;
    }
    @include bp(s1280) {
      margin-bottom: 80px;
    }
  }
  p {
    @include bp(s720) {
      width: 50%;
    }
  }
}
.image-container {
  width: 100%;
  @include bp(s360) {
    position: absolute;
    right: 20px;
    width: 50%;
    z-index: -1;
  }
  @include bp(s720) {
    width: 60%;
    right: 40px;
  }
  @include bp(s1280) {
    right: 80px;
  }
  .image {
    width: 100%;
    filter: grayscale(1);
    opacity: 0.6;
    transition: all 0.3s;
    &:hover {
      filter: grayscale(0);
      opacity: 1;
    }
  }
}
</style>
