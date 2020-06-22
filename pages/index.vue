<template>
  <section>
    <div>
      <!-- Content with list of coupons... -->
      <div class="content">
        <h1>heylocal – Gutscheine für Jena</h1>
        <p>Sichere dir jeden Tag einen Gutschein</p>
        <p class="small">(solange der Vorrat reicht)</p>
        <div id="info-text-submitted">
          <label>Erfolgreich eingelöst!</label>
          Danke fürs Einlösen und Nutzen von HeyLocal!
          <br>
          <div id="submitted-vendor"></div>
        </div>
        <div id="info-text-activated">
          Du hast heute bereits einen Gutschein aktiviert. Bitte schaue morgen
          wieder vorbei.
        </div>
        <div id="coupon-list">
          <transition-group name="fade">
            <div
              v-for="coupon in coupons"
              :key="coupon.id"
              class="coupon"
              :class="{ inactive: !coupon.active, loaded: coupon.loaded }"
              @click="openCouponModal(coupon)"
            >
              <img :src="coupon.image" @load="coupon.loaded = true">
              <div class="content" v-if="coupon.loaded">
                <div class="vendor">{{coupon.vendor}}</div>
                <h3 class="title">
                  {{coupon.title}}
                  <!--<span
                  class="badge-empty-v2"
                  v-if="!coupon.active"
                  >Bald&nbsp;wieder&nbsp;verfügbar!</span>-->
                </h3>
                <p>{{coupon.description}}</p>
                <div class="badge-empty-v1" v-if="!coupon.active">Bald wieder verfügbar!</div>
              </div>
            </div>
          </transition-group>
          <div v-if="loading" class="spinner"></div>
        </div>
        <div class="footer">
          <nuxt-link to="/imprint">Impressum & Datenschutz</nuxt-link>&nbsp;|&nbsp;
          <a href="mailto: contact@heylocal.de">Feedback</a>
        </div>
      </div>
    </div>

    <!-- Modal with detail information about the coupon :) -->
    <div
      class="modal"
      :class="{ show: showModal, hidden: !selectedCoupon }"
      @click="selectedCoupon = undefined"
    >
      <div class="modal-content-wrapper" v-if="selectedCoupon" @click.stop>
        <button id="detail-modal-close-button" @click.stop="selectedCoupon = undefined">
          <span>
            <img src="~assets/images/close.svg">
          </span>
        </button>
        <div class="modal-content" v-if="selectedCoupon.active">
          <h3>Gutschein aktivieren</h3>
          <p>Sichere dir jetzt diesen Gutschein und löse ihn vor Ort im Geschäft ein. Danach kannst du dir einen neuen Gutschein sichern.</p>
          <button
            id="modal-primary-button"
            class="button-primary"
            @click="activateCoupon(selectedCoupon)"
          >Aktivieren</button>
        </div>
        <div v-else class="modal-content">
          <h3>Gutschein nicht mehr verfügbar</h3>
          <p>Bitte schaue morgen noch einmal vorbei. Der Coupon ist aktuell nicht mehr verfügbar.</p>
          <button
            id="modal-primary-button"
            class="button-primary"
            @click="selectedCoupon = undefined"
          >OK</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Cookie from "js-cookie";
import cookieparser from "cookieparser";

export default {
  middleware: "hasNoActiveCoupon",
  data() {
    return {
      selectedCoupon: undefined,
      showModal: false
    };
  },
  async asyncData({ params, req }) {
    let submittedCouponId;
    if (process.server) {
      submittedCouponId = cookieparser.parse(req.headers.cookie)
        .submitted_coupon_id;
    } else {
      submittedCouponId = Cookie.get("submitted_coupon_id");
    }
    const {
      data: { coupons }
    } = await axios.get(`https://znsjx.sse.codesandbox.io/api/coupons`);
    const index = coupons.findIndex(c => c.id === submittedCouponId);
    if (index !== -1) {
      coupons[index].active = false;
      console.log("Coupon schon eingelöst: ", submittedCouponId);
    }
    return {
      coupons: coupons.map(c => {
        c.loaded = false;
        return c;
      })
    };
  },
  watch: {
    selectedCoupon(val) {
      setTimeout(() => {
        if (val) {
          this.showModal = true;
        } else {
          this.showModal = false;
        }
      }, 10);
    }
  },
  computed: {
    loading() {
      return this.coupons.some(c => !c.loaded);
    }
  },
  created() {
    this.setUserId();
  },
  methods: {
    setUserId() {
      if (process.client) {
        let userId = Cookie.get("user_id");
        if (!userId) {
          userId = Math.random()
            .toString(36)
            .substr(2, 10);
          Cookie.set("user_id", userId);
          this.$ga.event("user", "new", userId, 1);
        } else {
          this.$ga.event("user", "come_back", userId, 1);
        }
        console.log(`User id: '${userId}'`);
      }
    },
    openCouponModal(coupon) {
      if (coupon.active) {
        this.$ga.event("coupon", "click", coupon.id, 1);
      }
      this.selectedCoupon = coupon;
    },
    activateCoupon(coupon) {
      Cookie.set("active_coupon_id", coupon.id, { expires: 1 /* days */ });
      Cookie.set("active_coupon_expiry", Date.now() + 1000 * 60 * 60 * 24, {
        expires: 1 /* days */
      });
      this.$ga.event("coupon", "activate", coupon.id, 1);
      this.$router.push("/submit");
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@keyframes fade_in {
  from {
    transform: scale(0.95);
    opacity: 0.5;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.coupon .content {
  animation-name: fade_in;
  animation-iteration-count: 1;
  animation-duration: 0.3s;
  animation-delay: 0s;
  animation-timing-function: ease-in-out;
}

.coupon {
  transform: scale(0.9);
  opacity: 0;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.coupon.loaded {
  transform: scale(1);
  opacity: 1;
}
</style>
