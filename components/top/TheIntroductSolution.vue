<template>
  <b-container class="text-light">
    <b-row>
      <b-col>
        <h2>Why NuxtJS</h2>
        <hr>
      </b-col>
    </b-row>
    <AlignRowItems :class-name="['text']">
      <b-row>
        <b-col cols="12" md="4">
          <h3>MODULAR</h3>
          <p class="text">
            <Break>Nuxt is based on a powerful modular architecture.</Break>
            <Break>You can choose from more than 50 modules to make your development faster and easier.</Break>
            <Break>
              You don't have to reinvent the wheel to get PWA benefits,
              add Google Analytics to your page or generate a sitemap.
            </Break>
          </p>
        </b-col>
        <b-col cols="12" md="4">
          <h3>PERFORMANT</h3>
          <p class="text">
            <Break>With Nuxt.js, your application will be optimized out of the box.</Break>
            <Break>We do our best to build performant applications by utilizing Vue.js and Node.js best practices.</Break>
            <Break>To squeeze every unnecessary bit out of your app Nuxt includes a bundle analyzer and lots of opportunities to fine-tune your app.</Break>
          </p>
        </b-col>
        <b-col cols="12" md="4">
          <h3>ENJOYABLE</h3>
          <p class="text">
            <Break>Our main focus is the Developer Experience.</Break>
            <Break>We love Nuxt.js and continuously improve the framework so you love it too! 💚</Break>
            <Break>Expect appealing solutions, descriptive error messages, powerful defaults and detailed documentation.</Break>
            <Break>If questions or problems come up, our helpful community will help you out.</Break>
          </p>
        </b-col>
      </b-row>
    </AlignRowItems>
  </b-container>
</template>
