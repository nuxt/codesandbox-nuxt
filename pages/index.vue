<template>
  <section>
    <div>
      <!-- Content with list of coupons... -->
      <div class="content">
        <img
          src="~assets/images/heylocal_logo.svg"
          alt="heylocal – Deine Gutscheine für Jena"
          width="200"
          height="auto"
          class="logo"
        >
        <p v-if="error" class="error">{{ error }}</p>
        <p
          class="intro"
        >heylocal ist eine Plattform, die Deine lokalen Käufe belohnt. Lokale Händler stellen Angebote in Form von Gutscheinen zur Verfügung und präsentieren die Vielfalt unserer Stadt.</p>
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
               <!-- COUPON IMAGE AND LOADING SPINNER -->
               <img v-if="coupon.image"
                    :src="coupon.image"
                    @load="couponImageLoaded(coupon)"
                    :alt="coupon.title">
               <div v-else class="spinner"></div>

               <div class="content">
                  <div class="vendor">{{coupon.vendor}}</div>
                  <h3 class="title">{{coupon.title}}</h3>
                  <p>{{coupon.description}}</p>
                  <div class="badge-empty-v1" v-if="!coupon.active">Bald wieder verfügbar!</div>
               </div>
            </div>
          </transition-group>
        </div>
        <div class="footer">
          <img
            src="~assets/images/heylocal_logo.svg"
            alt="heylocal – Deine Gutscheine für Jena"
            width="200"
            height="auto"
            class="logo"
          >
          <div class="social-links">
            <a
              href="https://www.facebook.com/heylocaljena"
              target="_blank"
              title="Folge uns bei Facebook"
            >
              <img src="~assets/images/facebook_logo.svg" alt="Facebook" width="60" height="60">
            </a>
            <a
              href="https://www.instagram.com/heylocal_/"
              target="_blanc"
              title="Folge uns bei Instagram"
            >
              <img src="~assets/images/instagram_logo.svg" alt="Instagram" width="60" height="60">
            </a>
          </div>
          <div class="navi">
            <a href="mailto:contact@heylocal.de">Feedback</a>
            <nuxt-link to="/imprint">Impressum & Datenschutz</nuxt-link>
            <a target="_blank" href="/legal?id=Heylocal-Nutzungsbedingungen">Nutzungsbedingungen</a>
          </div>
          <div class="version">version: {{ version }}</div>
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
          <h3>{{ selectedCoupon.popUp && selectedCoupon.popUp.title ? selectedCoupon.popUp.title : 'Gutschein aktivieren' }}</h3>
          <p>{{ selectedCoupon.popUp && selectedCoupon.popUp.text ? selectedCoupon.popUp.text : 'Sichere dir jetzt diesen Gutschein und löse ihn vor Ort im Geschäft ein. Nach dem Einlösen kannst du dir einen neuen Gutschein sichern.' }}</p>
          <button
            id="modal-primary-button"
            :class="{ loading: activatingCoupon }"
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
   import {version} from "../package.json";

   export default {
      middleware: "hasNoActiveCoupon",
      data() {
         return {
            selectedCoupon: undefined,
            showModal: false,
            error: undefined,
            activatingCoupon: false,
            version: version
         };
      },
      async asyncData({params, req}) {
         try {
            let submittedCouponId;
            if (process.server && req.headers.cookie) {
               submittedCouponId = cookieparser.parse(req.headers.cookie)
                  .submitted_coupon_id;
            } else if (process.client) {
               submittedCouponId = Cookie.get("submitted_coupon_id");
            }
            const {
               data: {coupons}
            } = await axios.get(`${process.env.SANDBOX_URL}api/coupons`);
            if (submittedCouponId !== undefined) {
               const index = coupons.findIndex(c => c.id === submittedCouponId);
               if (index !== -1) {
                  coupons[index].active = false;
                  console.log("Coupon schon eingelöst: ", submittedCouponId);
               }
            }
            return {
               coupons: coupons.map(c => {
                  c.loaded = false;
                  return c;
               })
            };
         } catch (e) {
            console.log("Error: ", e);
            return {error: e.message, coupons: []};
         }
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
      created() {
         this.setUserId();
         if (process.client) {
            this.loadCouponImages();
         }
      },
      methods: {
         async loadCouponImages() {
            const {
               data: {coupons: images}
            } = await axios.get(`${process.env.SANDBOX_URL}api/coupon-images`);
            images.forEach(({image, id: couponId}) => {
               const index = this.coupons.findIndex(coupon => coupon.id === couponId);
               this.$set(this.coupons[index], "image", image);
            });
         },
         couponImageLoaded(coupon) {
            const i = this.coupons.findIndex(c => c.id === coupon.id);
            this.coupons[i].loaded = true;
         },
         setUserId() {
            // eslint-disable-next-line
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
            this.activatingCoupon = true;
            Cookie.set("active_coupon_id", coupon.id, {expires: 3 /* days */});
            Cookie.set("active_coupon_expiry", Date.now() + 1000 * 60 * 60 * 24 * 3, {
               expires: 3 /* days */
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

.coupon img {
   transform: scale(0.9);
   opacity: 0;
   transition: opacity 0.3s ease-out 0.3s, transform 0.5s ease-in;
}

.coupon.loaded img {
   transform: scale(1);
   opacity: 1;
}
</style>
