<template>
  <div class="fullsize-box" v-bind="boxHeight">
    <slot></slot>
    <div
      v-show="false"
      class="bg-dark text-light p-2"
      style="position:absolute;left:1rem;bottom:1rem;"
    >
      <p v-for="(i, k) in heightParam" :key="k">{{ k }}: {{ i }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0,
      clientHeight: 0,
      scrollHeight: 0,
      heightParam: {}
    };
  },
  props: {
    heightRatio: {
      type: Number,
      default: 100
    }
  },
  computed: {
    boxHeight() {
      let scrollHeight = this.scrollHeight;
      if (this.scrollHeight === this.clientHeight) {
        scrollHeight = this.windowHeight;
      }

      if (!this.windowHeight) return false;
      let height = Math.round((this.windowHeight * this.heightRatio) / 100);

      if (scrollHeight <= height) {
        height += "px";
      } else {
        height = "auto";
      }

      return { style: { "--boxHeight": height } };
    }
  },
  mounted() {
    this.setHeight();
    this.setParams();
    window.addEventListener("resize", this.setHeight);
    window.addEventListener("resize", this.setParams);
  },
  methods: {
    setHeight() {
      const windowWidth = this.$window.width;
      if (this.windowWidth === windowWidth) return false;
      this.windowWidth = this.$window.width;
      this.windowHeight = this.$window.height;
      if (this.$el) {
        this.clientHeight = this.$el.clientHeight;
        this.scrollHeight = this.$el.scrollHeight;
      }
    },
    setParams() {
      const param = {
        oldWidth: this.windowWidth,
        newWidth: this.$window.width
        //clientHeight: this.$el.clientHeight,
        //offsetHeight: this.$el.offsetHeight,
        //scrollHeight: this.$el.scrollHeight,
        //innerHeight: global.innerHeight
        //outerHeight: global.outerHeight,
        //availHeight: global.screen.availHeight,
        //screenHeight: global.screen.height
      };
      this.heightParam = param;
    }
  }
};
</script>

<style scoped>
.fullsize-box {
  --boxHeight: 100vh;
  height: var(--boxHeight);
}
</style>
