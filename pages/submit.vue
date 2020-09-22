<template>
  <section>
    <div class="content">
      <div class="spinner" v-if="isLoading"></div>
      <div class="wallet-item" v-if="!isLoading && coupon">
        <div class="vendor">{{ coupon.vendor }}</div>
        <h2 class="title">{{ coupon.title }}</h2>
        <p class="info">{{ coupon.submit.info }}</p>
        <p>
          <a :href="locationLink" class="maps" target="_blank">{{ coupon.location.address }}</a>
        </p>
        <div class="validity">
          <div class="label">Gültig bis</div>
          <div class="date">{{ expiryDate }}</div>
        </div>
        <hr class="perforation">
        <div class="activation-code">
          <div class="activation-code-error" v-if="hasError">{{ error }}</div>
          <nuxt-link to="/qrcode" class="scanner-link">QR-Code scannen</nuxt-link>
          <div class="back-button-wrapper">
            <button class="back-button" @click="cancel">Gutschein verwerfen</button>
          </div>
          <!--
          <p class="activation-code-label-2">oder</p>
          <input
            autofocus="true"
            v-model="code"
            type="text"
            class="activation-code-input"
            inputmode="numeric"
            pattern="[0-9]*"
            maxlength="3"
          >
          <label for="code-input" class="activation-code-label">Freischaltcode eingeben</label>
          -->
        </div>
      </div>
      <div class="footer">
        <div class="navi">
          <a href="#">Feedback</a>
          <nuxt-link to="/imprint">Impressum & Datenschutz</nuxt-link>
        </div>
      </div>
    </div>

    <!-- Modal with detail information about the coupon :) -->
    <div class="modal" :class="{ show: showModal, hidden: !success }">
      <div class="modal-content-wrapper" v-if="success" @click.stop="yeah">
        <div class="modal-content">
          <h3>{{ coupon.successPopUp && coupon.successPopUp.title ? coupon.successPopUp.title : 'Gutschein eingelöst' }}</h3>
          <p>{{ coupon.successPopUp && coupon.successPopUp.text ? coupon.successPopUp.text : 'Dein Gutschein für ' + coupon.vendor + ' wurde erfolgreich eingelöst.' }}</p>
          <button
            id="modal-primary-button"
            class="button-primary"
            @click="$router.replace('/')"
          >Weiter</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import cookie from "js-cookie";
import axios from "axios";
import cookieparser from "cookieparser";

export default {
  name: "SubmitPage",
  middleware: "hasActiveCoupon",
  async asyncData({ params, req, redirect }) {
    let activeCouponId, activeCouponExpiry;
    if (process.server) {
      activeCouponId = cookieparser.parse(req.headers.cookie).active_coupon_id;
      activeCouponExpiry = cookieparser.parse(req.headers.cookie)
        .active_coupon_expiry;
    } else {
      activeCouponId = cookie.get("active_coupon_id");
      activeCouponExpiry = cookie.get("active_coupon_expiry");
    }
    const {
      data: { coupon }
    } = await axios.get(
      `${process.env.SANDBOX_URL}api/coupon?id=${activeCouponId}`
    );
    return { coupon, activeCouponExpiry };
  },
  data() {
    return {
      isLoading: false,
      hasError: false,
      error: "",
      code: "",
      success: false,
      showModal: false
    };
  },
  watch: {
    code(val) {
      this.hasError = false;
      this.error = "";
      if (val && val.length === 3) {
        this.submitCoupon();
      }
    },
    success(val) {
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
    expiryDate() {
      console.log(
        "Expiry: ",
        this.activeCouponExpiry,
        typeof this.activeCouponExpiry
      );
      const d = new Date(Number(this.activeCouponExpiry));
      return `${d.getDate() < 10 ? "0" + d.getDate() : d.getDate()}.${
        d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1
      }.${d.getFullYear()} ${
        d.getHours() < 10 ? "0" + d.getHours() : d.getHours()
      }:${d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()} Uhr`;
    },
    locationLink() {
      return this.isIOS
        ? this.coupon.location.iOSLink
        : this.coupon.location.androidLink;
    },
    isIOS: () => {
      try {
        return Boolean(
          navigator &&
            window &&
            /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !window.MSStream
        );
      } catch (e) {
        return false;
      }
    }
  },
  created() {
    if (!this.coupon) {
      cookie.remove("active_coupon_id");
      this.$router.replace("/");
    }
    if (this.$route.query && this.$route.query.code) {
      this.code = this.$route.query.code;
      this.submitCoupon();
    }
  },
  methods: {
    yeah() {
      console.log("yeah"); // empty clich handler for outside modal click...
    },
    cancel() {
      this.$ga.event("coupon", "cancel", this.coupon.id, 1);
      cookie.remove("active_coupon_id");
      this.$router.push("/");
    },
    async submitCoupon() {
      this.isLoading = true;
      console.log("Request submit: ", this.code, this.coupon.id);
      try {
        const response = await axios.get(
          `${process.env.SANDBOX_URL}api/submit?coupon_id=${
            this.coupon.id
          }&code=${this.code}`
        );
        this.$ga.event("coupon", "submit", this.coupon.id, 1);
        cookie.remove("active_coupon_id");
        cookie.set("submitted_coupon_id", this.coupon.id, {
          expires: 1 /* days */
        });
        this.success = true;
        console.log("Response: ", response);
      } catch (e) {
        if (e.response && e.response.data && e.response.data.error) {
          this.error = e.response.data.error;
        } else {
          this.error = "Der eingebene Code ist leider nicht korrekt!";
        }
        this.hasError = true;
      }
      this.isLoading = false;
    }
  }
};
</script>

<style>
</style>
