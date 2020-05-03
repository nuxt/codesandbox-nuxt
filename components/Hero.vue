<template>
  <section class="hero">
    <div class="container">
      <div class="content-container" v-bind:class="{ active: isActive }">
        <div class="content">
          <div class="separator" v-bind:class="{ active: isActive }"></div>
          <div class="content-two">
            <div class="logo anibasic" v-bind:class="{ active: isActive }">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M48 0H40V48H48V0Z" fill="white"></path>
                <path d="M28 0H20V48H28V0Z" fill="white"></path>
                <path d="M18 16H10V48H18V16Z" fill="white"></path>
                <path d="M38 16H30V48H38V16Z" fill="white"></path>
                <path d="M8 0H0V48H8V0Z" fill="white"></path>
              </svg>
            </div>
            <div class="hello anibasic" v-bind:class="{ active: isActive }">
              <h3>Hello!</h3>
              <h4>My name is:</h4>
            </div>
            <div class="separator" v-bind:class="{ active: isActive }"></div>
            <div class="name anibasic" v-bind:class="{ active: isActive }">
              <h1>Javier Castillo</h1>
            </div>
          </div>
          <div class="separator" v-bind:class="{ active: isActive }"></div>
          <div class="content-three">
            <div class="bio anibasic" v-bind:class="{ active: isActive }">
              <p>I'm an interactive designer from Guatemala that designs and develops beautiful, fast, functional websites.</p>
              <p>
                Currently I am the Creative Director and Co-Founder of
                <a href="#">Royale Studios</a>.
              </p>
            </div>
            <div class="separator" v-bind:class="{ active: isActive }"></div>
            <div class="feats">
              <div class="feat-1 anibasic" v-bind:class="{ active: isActive }">
                <span>Read in:</span>
                <a href="#">English</a> /
                <a href="#">Español</a>
              </div>
              <div class="feat-2 anibasic" v-bind:class="{ active: isActive }">
                <span>Featured project:</span>
                <a href="#">Royale Studios Branding</a>
              </div>
              <div class="separator" v-bind:class="{ active: isActive }"></div>
              <div class="follow anibasic" v-bind:class="{ active: isActive }">
                <span class="jf-label">Follow me</span>
                <div class="social">
                  <a class="social-link" href="#">Instagram</a>
                  <a class="social-link" href="#">Twitter</a>
                  <a class="social-link" href="#">Behance</a>
                  <a class="social-link" href="#">Dribbble</a>
                  <a class="social-link" href="#">Linkedin</a>
                  <span class="social-handle">@javierfcast</span>
                </div>
              </div>
            </div>
          </div>
          <div class="separator" v-bind:class="{ active: isActive }"></div>
          <div class="nav">
            <div class="welcome anibasic" v-bind:class="{ active: isActive }">
              <h5>Welcome</h5>
            </div>
            <div class="links">
              <a class="link anibasic" v-bind:class="{ active: isActive }" href="#">About</a>
              <a class="link anibasic" v-bind:class="{ active: isActive }" href="#">Work</a>
              <a class="link anibasic" v-bind:class="{ active: isActive }" href="#">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RoyaleAnimation/>
  </section>
</template>

<script>
import RoyaleAnimation from "~/components/RoyaleAnimation.vue";

export default {
  components: {
    RoyaleAnimation
  },
  data() {
    return {
      isActive: false
    };
  },
  mounted: function() {
    this.isActive = true;
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/_mixins.scss";

a {
  @include h5;
}

.hero {
  width: 100vw;
  min-height: 100vh;
  padding-top: 20px;
  @include bp(s720) {
    padding-top: 40px;
  }
}
.container {
  @include bp(s1280) {
    margin: 0 auto;
    width: 1040px;
  }
}
.content-container {
  width: 0;
  overflow: hidden;
  @include transition(all, 1s);
  transition-delay: 2s;
  &.active {
    width: 280px;
    @include bp(s720) {
      width: 360px;
    }
    @include bp(s1280) {
      width: 1040px;
    }
  }
}
.content {
  background: white;
  width: 280px;
  padding: 20px;
  @include bp(s720) {
    width: 360px;
  }
  @include bp(s1280) {
    width: 1040px;
    padding: 40px;
  }
}
.separator {
  display: block;
  width: 0px;
  height: 2px;
  @include transition(width, 1s);
  transition-delay: 2.2s;
  &.two {
    transition-delay: 2.4s;
  }
  &.three {
    transition-delay: 2.6s;
  }
  &.active {
    width: 100%;
    background: $black;
  }
}
.content-top {
  text-align: right;
  padding-bottom: 10px;
  @include bp(s1280) {
    padding-bottom: 20px;
  }
}
.content-two {
  display: flex;
  flex-wrap: wrap;
  .logo {
    background: #FB3449;
    flex: 0 0 auto;
    width: 100px;
    height: 100px;
    transition-delay: 2s;
    display: flex;
    align-items: center;
    justify-content: center;
    @include bp(s1280) {
      width: 160px;
      height: 160px;
    }
  }
  .hello {
    width: calc(100% - 100px);
    display: flex;
    padding: 20px;
    justify-content: center;
    flex-direction: column;
    transition-delay: 2.1s;
    @include bp(s1280) {
      display: block;
      width: calc(33.333% - 160px);
    }
  }
  .separator {
    @include bp(s1280) {
      display: none;
    }
  }
  .name {
    width: 100%;
    padding: 20px 0;
    transition-delay: 2.2s;
    @include bp(s1280) {
      width: 66.666%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
    }
    h1 {
      font-size: 37px;
      @include bp(s720) {
        font-size: 49px;
      }
      @include bp(s1280) {
        font-size: 90px;
      }
    }
  }
}
.content-three {
  display: flex;
  flex-wrap: wrap;
  .bio {
    width: 100%;
    padding: 20px 0;
    transition-delay: 2.3s;
    @include bp(s1280) {
      padding: 20px 20px 20px 0;
      border-right: 2px solid $black;
      width: 33.333%;
    }
  }
  > .separator {
    @include bp(s1280) {
      display: none;
    }
  }
  .feats {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    @include bp(s1280) {
      width: 66.666%;
    }
    span {
      display: block;
      margin-bottom: 6px;
    }
    .feat-1 {
      padding: 20px 20px 20px 0;
      width: 50%;
      border-right: 2px solid $black;
      transition-delay: 2.4s;
      @include bp(s1280) {
        padding: 20px;
      }

      .language-link {
        @include h5;
      }
    }
    .feat-2 {
      padding: 20px 0 20px 20px;
      width: 50%;
      transition-delay: 2.5s;
    }
    .follow {
      width: 100%;
      padding: 20px 0;
      text-align: right;
      transition-delay: 2.6s;
      .social {
        margin-top: 6px;
        .social-link {
          margin-left: 10px;
        }
        .social-handle {
          display: inline-block;
          margin-bottom: 0;
          margin-left: 10px;
        }
      }
    }
  }
}
.nav {
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  .welcome {
    width: 30%;
    transition-delay: 2.7s;
  }
  .links {
    width: 70%;
    text-align: right;
    .link {
      margin-left: 10px;
      &:nth-child(1) {
        transition-delay: 2.8s;
      }
      &:nth-child(2) {
        transition-delay: 2.9s;
      }
      &:nth-child(3) {
        transition-delay: 3s;
      }
    }
  }
}
.anibasic {
  opacity: 0;
  @include transition(all, 3s);
  &.active {
    opacity: 1;
  }
}
</style>
