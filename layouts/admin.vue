<template>
  <div class="container">
    <Header></Header>
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
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/admin/AdminHeader";
import Footer from "@/components/admin/AdminFooter";
export default {
  name: "Admin",
  components: {
    Header,
    Footer,
    CookieLaw: async () => {
      /* eslint-disable */
      if (process.client)
         return (await import("vue-cookie-law")).default;
      return {};
    }
  },
  created() {
    if (process.client) document.body.classList.add("admin-body");
  },
  beforeDestroy() {
    if (process.client) document.body.classList.remove("admin-body");
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

.admin-body textarea {
  border: solid 1px #E2E2E2;
  padding: 1rem;
  margin: 0 auto;
  display: block;
  border-radius: 5px;
  width: 100%;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
.admin-body button {
  color: inherit;
  border-width: 0;
  padding: 0;
  cursor: pointer;
  display: block;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  padding: 14px 16px;
  color: rgb(255, 255, 255);
  background: rgb(77, 148, 255);
  border-radius: 50px;
  width: 100%;
  max-width: 240px;
  margin: 2rem auto 0 auto;
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
  font-size: 17px;
  line-height: 1.35;
  background-color: rgb(245, 247, 249);
}

.admin-body {
  max-width: 1240px;
  width: 90%;
}

p {
  margin: 0rem 20px 1rem 20px;
}
p.small {
  font-size: 15px;
}

.content {
  padding: 0 0 0 0;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

idden {
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
  width: 45px;
  height: 45px;
  background-color: transparent;
  border-radius: 50%;
  border: solid 4px black;
  border-bottom-color: transparent;
  margin: 150px auto;
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
