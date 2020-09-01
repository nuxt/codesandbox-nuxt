<template>
  <div class="scroll-transition" :class="{ active: isActive }" :style="{ '--bgColor': getBgColor}">
    <slot/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapse: "nav-collapse",
      active: false,
      showed: false
    };
  },
  props: {
    bgColor: { type: String, default: "white" }
  },
  computed: {
    isActive() {
      if (this.showed) return this.active;
      const isJustShown = Boolean(this.$window.pageYOffset);
      this.setActive(isJustShown);
      return this.active;
    },
    getBgColor() {
      return this.bgColor;
    }
  },
  methods: {
    setActive(isJustShown) {
      this.active = isJustShown;
    },
    setShowed(isJustShown) {
      this.showed = isJustShown;
    }
  },
  mounted() {
    this.$root.$on("bv::collapse::state", (collapseId, isJustShown) => {
      if (collapseId === this.collapse) {
        this.setActive(isJustShown);
        this.setShowed(isJustShown);
      }
    });
  }
};
</script>

<style scoped>
.scroll-transition {
  background-color: none;
  transition: background-color 0.2s linear;

  width: 100vw;
  z-index: 1030;
  position: fixed;
  top: 0;
  left: 0;
}

.scroll-transition.active {
  --bgColor: white;
  background-color: var(--bgColor);
  transition: background-color 0.2s linear;
}
</style>