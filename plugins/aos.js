import Vue from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

/* eslint new-cap: 0 */
export default ({ app }) => {
  app.AOS = new AOS.init({
    // disable: "phone",
    duration: 800
  });
};

Vue.mixin({
  watch: {
    "$route.path": function () {
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    }
  }
});
