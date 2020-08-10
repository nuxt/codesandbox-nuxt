<template>
  <div class="container">
    <Nuxt/>
    <client-only>
      <CookieLaw theme="dark-lime">
        <div slot="message">
          <p>Diese Webseite verwendet Cookies, um die Nutzung kontinuierlich zu verbessern.</p>
          <p>
            <nuxt-link to="/imprint">> Mehr erfahren</nuxt-link>
          </p>
        </div>
      </CookieLaw>
    </client-only>
  </div>
</template>

<script>
export default {
  components: {
    CookieLaw: async () => {
      /* eslint-disable */
      if (process.client) return (await import("vue-cookie-law")).default;
    }
  }
};
</script>


<style>
/****** Elad Shechter's RESET *******/
/*** box sizing border-box for all elements ***/
*,
*::before,
*::after {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
button {
  background-color: transparent;
  color: inherit;
  border-width: 0;
  padding: 0;
  cursor: pointer;
}
figure {
  margin: 0;
}
input::-moz-focus-inner {
  border: 0;
  padding: 0;
  margin: 0;
}
ul,
ol,
dd {
  margin: 0;
  padding: 0;
  list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}
p {
  margin: 0;
}
cite {
  font-style: normal;
}
fieldset {
  border-width: 0;
  padding: 0;
  margin: 0;
}

/* Styling */

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  margin: 0 auto;
  max-width: 500px;
  font-size: 17px;
  line-height: 1.35;
  background-color: rgb(245, 247, 249);
}

h1 {
  margin: 2rem 20px 1rem 20px;
  font-size: 34px;
  font-weight: 700;
  line-height: 41px;
}

h2 {
  margin: 2rem 20px 1rem 20px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
}
h3 {
  margin: 1rem 20px 1rem 20px;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.35;
}
p {
  margin: 0rem 20px 1rem 20px;
}
p.small {
  font-size: 15px;
}

table {
  margin: 1rem 20px 1rem 20px;
  font-size: 13px;
}
thead {
  font-weight: 600;
}
td {
  vertical-align: top;
}

.content {
  padding: 0 0 0 0;
}

.wallet-item {
  margin: 20px;
  padding: 2.2em 0 0 0;
  border-radius: 15px;
  box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, 0.1);
  background: rgb(255, 255, 255);
}

.wallet-item .back-button-wrapper {
  margin: 0.5em 0px 1em 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.wallet-item .back-button-wrapper .back-button {
  padding: 1rem;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.02rem;
  color: rgb(39, 117, 235);
  border-radius: 6px;
}

.wallet-item .vendor {
  font-size: 16px;
  margin: 0 20px 0.25rem 20px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.02rem;
}

.wallet-item .title {
  margin: 0 20px 0.75rem 20px;
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
}

.wallet-item .info {
  font-size: 15px;
  color: rgba(0, 0, 0, 0.6);
}

.wallet-item .maps {
  position: relative;
  display: block;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin: 1em auto 1.7em auto;
  padding: 0.9rem 40px 0.9rem 0;
  font-size: 15px;
  color: rgb(39, 117, 235);
}

.wallet-item .maps::before {
  position: absolute;
  display: block;
  content: "";
  top: calc(50% - 12px);
  right: 0;
  width: 24px;
  height: 24px;
  background-image: url("~assets/images/arrow-right-2.svg");
  background-repeat: no-repeat;
}

.wallet-item .validity {
  margin: 1em 20px 2em 20px;
}

.wallet-item .validity .label {
  font-size: 12px;
  line-height: 2;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
}

.wallet-item .validity .date {
  font-weight: 700;
}

.wallet-item .perforation {
  display: block;
  height: 1px;
  border: 0;
  padding: 0;
  margin: 1em 20px 1.2em 20px;
  border-top: 2px dashed rgba(0, 0, 0, 0.2);
}

.wallet-item .activation-code {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
}

.wallet-item .activation-code-error {
  color: red;
  text-align: center;
  width: 50%;
  margin: 1rem auto 0 auto;
  font-size: 15px;
}

.wallet-item .activation-code-input {
  text-align: center;
  font-size: 54px;
  width: 50%;
  border-radius: 8px;
  border: 0px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  background-color: rgba(0, 0, 0, 0.05);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 1rem auto 0.375rem auto;
  display: block;
}

.wallet-item .activation-code-label {
  display: block;
  padding: 0 0 2rem 0;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
}
.wallet-item .activation-code-label-2 {
  padding: 0;
  display: block;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
}

.scanner-link {
  position: relative;
  color: rgb(255, 255, 255);
  font-size: 17px;
  font-weight: 600;
  padding: 1rem 1.5rem 1rem 3.5rem;
  border-radius: 100px;
  letter-spacing: 0.02rem;
  box-shadow: 0 8px 13px -8px rgba(39, 117, 235, 0.5);
  background: rgb(39, 117, 235);
}

.scanner-link::before {
  position: absolute;
  display: block;
  content: "";
  top: calc(50% - 0.89em);
  left: 1.3rem;
  width: 30px;
  height: 30px;
  background-image: url("~assets/images/qr-scan.svg");
  background-repeat: no-repeat;
}

#coupon-list .coupon {
  position: relative;
  border-radius: 13px;
  overflow: hidden;
  margin: 30px 20px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 10px 50px -10px rgba(0, 0, 0, 0.3);
  transform: scale3d(1, 1, 1);
  transition: all 0.4s ease;
  user-select: none;
}

#coupon-list .coupon img {
  width: 100%;
  display: block;
}

#coupon-list .coupon .content {
  position: absolute;
  width: 100%;
  bottom: 0px;
  left: 0px;
  padding: 40px 0 0 0;
  color: rgb(255, 255, 255);
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  text-shadow: 0px 0px 40px rgb(0, 0, 0);
}

#coupon-list .coupon .content .vendor {
  font-size: 17px;
  margin: 0rem 16px 0.25rem 16px;
  text-transform: uppercase;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.03rem;
}

#coupon-list .coupon .content .title {
  margin: 0 16px 0.5rem 16px;
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
}

#coupon-list .coupon .content p {
  margin: 0em 16px 1rem 16px;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
}

#coupon-list .coupon .content .badge-empty-v1 {
  font-size: 15px;
  font-weight: 600;
  margin: 0;
  padding: 0.75rem 16px;
  color: rgba(0, 0, 0, 0.8);
  background: rgb(255, 191, 73);
  text-align: center;
}

#coupon-list .coupon:hover {
  cursor: pointer;
  transform: scale3d(1, 1, 1);
  transition: all 0.4s ease;
}

#coupon-list .coupon:active {
  cursor: pointer;
  transform: scale3d(0.95, 0.95, 0.95);
  transition: all 0.05s ease;
}
@media (pointer: none), (pointer: coarse) {
  #coupon-list .coupon:hover {
    cursor: pointer;
    transform: scale3d(0.95, 0.95, 0.95);
    transition: all 0.05s ease;
  }
}
#coupon-list .coupon:link {
  cursor: pointer;
  transform: scale3d(0.95, 0.95, 0.95);
  transition: all 0.05s ease;
}

#coupon-list .coupon.activated {
  color: red;
}

#coupon-list .coupon.inactive img {
  opacity: 1;
  filter: grayscale(100%) opacity(35%) brightness(25%);
}
#coupon-list .coupon.inactive .content {
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
#coupon-list .coupon.inactive .content .vendor,
#coupon-list .coupon.inactive .content .title,
#coupon-list .coupon.inactive .content p {
  color: rgba(0, 0, 0, 0.7);
  text-shadow: 0px 0px 40px rgb(255, 255, 255);
}

button:focus {
  outline: 0;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal {
  display: grid;
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  padding: 20px 28px 60px 28px;
  transition: background-color 0.1s ease-out;
}

.modal.show {
  background-color: rgba(0, 0, 0, 0.5);
}

.modal.show .modal-content-wrapper {
  opacity: 1;
  transform: translateY(0vh);
  transition: opacity 0.1s ease-out 0.1s,
    transform 0.3s cubic-bezier(0.58, 1.82, 0.67, 0.76) 0.1s;
}

.modal .modal-content-wrapper {
  transform: translateY(5rem);
  opacity: 0;
  position: relative;
  background-color: white;
  width: 100%;
  max-width: 400px;
  margin: auto;
  border-radius: 13px;
  padding: 4rem 1.75rem 2.5rem 1.75rem;
  box-shadow: 0px 8px 72px 0px rgba(0, 0, 0, 0.5);
}

.modal .modal-content-wrapper #detail-modal-close-button {
  position: absolute;
  top: 6px;
  right: 6px;
  padding: 10px;
}

.modal .modal-content-wrapper #detail-modal-close-button span {
  display: block;
  background-color: rgba(0, 0, 0, 0.1);
  width: 28px;
  height: 28px;
  border-radius: 16px;
}

.modal .modal-content-wrapper #detail-modal-close-button span img {
  width: 28px;
  height: 28px;
  opacity: 0.6;
}

.modal .modal-content-wrapper .button-primary {
  display: block;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  padding: 14px 16px;
  color: rgb(255, 255, 255);
  background: rgb(77, 148, 255);
  border-radius: 100px;
  width: 100%;
  margin: 2rem auto 0 auto;
}

.modal .modal-content-wrapper .button-primary:active {
  background: rgb(39, 117, 235);
}

.modal .modal-content {
  animation: fade-in 0.2s ease;
}

.modal .modal-content h3 {
  margin: 0 0 0.7em 0;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
}
.modal .modal-content p {
  margin: 0 0 0.7em 0;
  text-align: center;
}

.hidden {
  display: none;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  animation: rotate 1s linear infinite;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border-radius: 50%;
  border: solid 4px black;
  border-bottom-color: transparent;
  margin: 20vh auto;
}

.button-primary.loading:after {
  content: "";
  display: block;
  animation: rotate 0.7s linear infinite;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border-radius: 50%;
  border: solid 2px white;
  border-bottom-color: transparent;
  float: right;
  margin: 2px 8px 0 -24px;
}

@keyframes shake {
  0% {
    margin-left: 0rem;
  }
  25% {
    margin-left: 0.5rem;
  }
  75% {
    margin-left: -0.5rem;
  }
  100% {
    margin-left: 0rem;
  }
}

.input-error {
  animation: shake 0.2s ease-in-out 0s 2;
}

.footer {
  font-size: 12px;
  text-align: center;
  padding-bottom: 2rem;
  color: rgba(0, 0, 0, 0.4);
}

.footer a:link,
.footer a:visited {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.4);
}

.footer a:hover,
.footer a:active {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
}

#info-text-activated {
  display: none;
  padding: 1rem;
  background: #eee;
  border: solid 1px #e9e9e9;
  border-radius: 8px;
  margin: 1rem;
  color: #3b3b3b;
}

#info-text-submitted {
  display: none;
  padding: 1rem;
  background: #70d3362a;
  border: solid 1px #70d336a6;
  border-radius: 8px;
  margin: 1rem;
  color: #2d5a13;
}

#info-text-submitted label {
  font-weight: bold;
  display: block;
}

#info-text-submitted #submitted-vendor {
  font-style: italic;
  margin-top: 1rem;
}
</style>
