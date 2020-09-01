import Vue from "vue";

Vue.use({
  install(Vue) {
    const $window = Vue.observable({
      width: 0,
      height: 0,
      pageYOffset: 0
    });

    if (process.browser) {
      const onScroll = () => {
        $window.pageYOffset = global.pageYOffset;
      };
      const onResize = () => {
        $window.width = document.documentElement.clientWidth;
        $window.height = global.innerHeight;
      };

      global.addEventListener("scroll", onScroll);
      global.addEventListener("resize", onResize);

      onScroll();
      onResize();
    }

    Vue.prototype.$window = $window;
  }
});
