<template>
  <section>
    <div class="container">
      <h1>
        Admin Panel
        <small @click="logout">logout</small>
      </h1>
      <p>Here you can see and manage all configured coupons.</p>
      <div class="error" v-if="error">{{ error }}</div>
      <table class="coupon-list">
        <thead>
          <tr>
            <th>#</th>
            <th>Vendor</th>
            <th>Usage</th>
            <th>Balance</th>
            <th>Code</th>
            <th>Active?</th>
          </tr>
        </thead>
        <tbody>
          <tr class="coupon" v-for="coupon in coupons" :key="coupon.id">
            <td>{{ coupon.id }}</td>
            <td>{{ coupon.vendor }}</td>
            <td>{{ coupon.usageCount }}</td>
            <td>
              <input
                maxlength="4"
                size="4"
                v-model="coupon.balance"
                @keypress.enter="updateCouponBalance(coupon, $event)"
                @change="updateCouponBalance(coupon)"
                type="number"
                :disabled="isLoading"
                name="coupon-balance"
                id="coupon-balance-input"
                placeholer="0"
              >
            </td>
            <td>{{ coupon.submit.code }}</td>
            <td>
              <client-only>
                <ToggleButton
                  :style="{ transition: 'opacity 0.3s ease-in', opacity: isLoading ? '0.3' : '1' }"
                  v-model="coupon.active"
                  @change="updateCouponBalance(coupon)"
                />
              </client-only>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="footer">
      <nuxt-link to="/imprint">Impressum & Datenschutz</nuxt-link>|
      <a href="mailto: contact@heylocal.de">Feedback</a>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import cookie from "js-cookie";
import cookieparser from "cookieparser";

export default {
  name: "AdminPage",
  middleware: "isAdmin",
  data() {
    return {
      error: "",
      isLoading: false
    };
  },
  components: {
    ToggleButton: async () => {
      /* eslint-disable */
      if (process.client)
        return (await import("vue-js-toggle-button")).ToggleButton;
    }
  },
  async asyncData({ params, req }) {
    try {
      let token;
      if (process.server) {
        token = cookieparser.parse(req.headers.cookie).token;
      } else {
        token = cookie.get("token");
      }
      const {
        data: { coupons }
      } = await axios.get(
        `${process.env.SANDBOX_URL}api/admin-coupons?t=${token}`
      );
      return { coupons };
    } catch (e) {
      console.log("Error: ", e);
      return { coupons: [] };
    }
  },
  methods: {
    logout() {
      cookie.remove("token");
      this.$router.push("/login");
    },
    async updateCouponBalance(coupon, event) {
      this.isLoading = true;
      if (event) {
        event.target.blur();
      }
      try {
        coupon.token = cookie.get("token");
        const query = this.objectToUrlQuery(coupon);
        const url = `${process.env.SANDBOX_URL}api/update-coupon`;
        console.log("Request: ", `${url}${query}`);
        const {
          data: { coupons }
        } = await axios.get(`${url}${query}`);
      } catch (e) {
        console.error("Error on updating coupon: ", e);
        this.error = "Could not update coupon!";
      }
      this.isLoading = false;
    },
    objectToUrlQuery(object) {
      let query = "";
      for (const key in object) {
        if (
          object.hasOwnProperty(key) &&
          ["string", "number", "boolean"].includes(typeof object[key])
        ) {
          query += `&${encodeURIComponent(key)}=${encodeURIComponent(
            object[key]
          )}`;
        }
      }
      return "?" + query.substring(1);
    }
  }
};
</script>


<style scoped>
th,
td {
  text-align: left;
  padding: 0.5em;
}
.footer {
  padding-top: 2em;
}
h1 small {
  float: right;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 400;
}
h1 small:hover {
  cursor: pointer;
  color: rgba(0, 0, 0, 1);
}

input[type="number"] {
  width: 60px;
  padding: 0.5em 0.7em;
  border: solid 1px #EFEFEF;
  border-radius: 5px;
  font-size: 14px;
}

.error {
  color: red;
}
</style>
