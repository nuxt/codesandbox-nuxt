<template>
   <section>
      <div class="container">
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
               <th>Konfigurieren</th>
               <th>Bild hochladen</th>
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
                  <img
                     src="~/assets/images/settings.svg"
                     alt="Settings"
                     @click="openSettings(coupon.id)"
                     class="settings-icon"
                  >
               </td>
               <td>
                  <input type="file" @change="uploadFile(coupon.id, $event)">
               </td>
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
         <button type="button" @click="addCoupon">+ Gutschein Hinzufügen</button>
         <div class="editor" v-if="rawCoupon">
            <h2>
               Gutschein Konfigurieren
               <img
                  src="~/assets/images/close.svg"
                  alt="Close"
                  @click="rawCoupon = ''"
                  class="close-icon"
               >
            </h2>
            <textarea name="raw-coupon" id="raw-coupon" cols="100" rows="30" v-model="rawCoupon"></textarea>
            <button type="button" @click="saveRawCoupon">Speichern</button>
         </div>
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
      layout: "admin",
      data() {
         return {
            error: "",
            isLoading: false,
            rawCoupon: ""
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
         addCoupon() {
            const template = {
               id: "COUPON_" + this.coupons.length,
               active: false,
               usageCount: 0,
               balance: 5,
               vendor: "Beispiel Ort",
               title: "Beispiel Titel",
               description: "Beispielbeschreibung",
               submit: {
                  info: "Infotext auf Submit-Page kommt hierher",
                  code: "123"
               },
               location: {
                  title: "Orttitel hier...",
                  address: "Adresse hier...",
                  iOSLink:
                     "https://maps.apple.com/?daddr=holz+&+hygge+Jena&dirflg=d&t=h",
                  androidLink:
                     "https://maps.google.com/?daddr=holzundhygge+Jena&dirflg=d&t=h"
               }
            };
            this.rawCoupon = JSON.stringify(template, null, 4);
         },

         async saveRawCoupon() {
            try {
               const couponToSave = JSON.parse(this.rawCoupon);
               const response = await axios.post(
                  `${process.env.SANDBOX_URL}api/save-coupon`,
                  {
                     coupon: couponToSave,
                     token: cookie.get("token")
                  }
               );
               this.rawCoupon = "";
               const {
                  data: { coupons }
               } = await axios.get(
                  `${process.env.SANDBOX_URL}api/admin-coupons?t=${cookie.get("token")}`
               );
               this.coupons = coupons;
            } catch (e) {
               this.error = "Konnte nicht gespeichert werden.";
            }
         },
         async openSettings(couponId) {
            const {
               data: { rawCoupon }
            } = await axios.get(
               `${
                  process.env.SANDBOX_URL
                  }api/raw-coupon?coupon_id=${couponId}&t=${cookie.get("token")}`
            );
            this.rawCoupon = rawCoupon;
         },
         convertFileToBase64(file) {
            return new Promise((resolve, reject) => {
               const reader = new FileReader();
               reader.readAsDataURL(file);
               reader.onload = () => resolve(reader.result);
               reader.onerror = error => reject(error);
            });
         },
         async uploadFile(couponId, event) {
            if (!event.target.files[0]) return;
            const exts = [".jpg", ".png", ".jpeg", ".JPG", ".PNG", ".JPEG"];
            if (
               !new RegExp("(" + exts.join("|").replace(/\./g, "\\.") + ")$").test(
                  event.target.value
               )
            ) {
               this.error = "Die Datei hat ein falsches Format. Erlaubt: JPG oder PNG";
               return;
            }
            if (event.target.files[0].size / 1024 / 1024 > 1) {
               this.error = "Datei zu groß. Sollte kleiner als 1MB sein!";
               return;
            }
            const extension = event.target.value.split(".").pop();
            const fileAsBase64String = await this.convertFileToBase64(
               event.target.files[0]
            );
            try {
               const response = await axios.post(
                  `${process.env.SANDBOX_URL}api/admin-file`,
                  {
                     couponId,
                     extension,
                     file: fileAsBase64String,
                     token: cookie.get("token")
                  }
               );
               console.log("Response: ", response);
            } catch (e) {
               this.error = "Bild konnte nicht hochgeladen werden.";
            }
         },
         async updateCouponBalance(coupon, event) {
            this.isLoading = true;
            if (event) {
               event.target.blur();
            }
            try {
               const update = {
                  id: coupon.id,
                  token: cookie.get("token"),
                  balance: coupon.balance,
                  active: coupon.active
               };

               const query = this.objectToUrlQuery(update);
               const url = `${process.env.SANDBOX_URL}api/update-coupon`;
               await axios.get(`${url}${query}`);
               const {
                  data: { coupons }
               } = await axios.get(
                  `${process.env.SANDBOX_URL}api/admin-coupons?t=${cookie.get("token")}`
               );
               this.coupons = coupons;
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


<style lang="scss" scoped>
   th,
   td {
      text-align: left;
      padding: 0.5em;
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

   .close-icon:hover,
   .settings-icon:hover {
      cursor: pointer;
      transform: scale(1.2);
   }

   .close-icon {
      margin-bottom: -8px;
      display: block;
      float: right;
   }

   h2 {
      font-weight: bold;
      margin-top: 32px;
   }
</style>
