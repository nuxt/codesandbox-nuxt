<template>
  <b-container class="my-5">
    <AlignRowItems :class-name="['title', 'text']">
      <b-row>
        <b-col cols="12" md="6" class="pb-3">
          <b-card img-src="2148237986.jpg" img-alt="abstract" img-top tag="article">
            <b-card-title class="title">SERVER SIDE RENDERED</b-card-title>
            <b-card-text class="text">
              The most popular mode for Nuxt. With SSR, also called "universal" or "isomorphic" mode, a Node.js server will be used to deliver HTML based on your Vue components to the client instead of the pure javascript. Using SSR will lead to a large SEO boost, better UX and more opportunities (compared to a traditional Vue SPA).
              Because implementing SSR on your own can be really tedious, Nuxt.js gives you full support out of the box and will take care of common pitfalls.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" md="6" class="pb-3">
          <b-card img-src="2148237985.jpg" img-alt="abstract" img-top tag="article">
            <b-card-title class="title">STATICALLY GENERATED GENERATED</b-card-title>
            <b-card-text class="text">
              Static Site Generation is a very hot topic right now (aka JAMStack). Instead of switching to another framework and spending time to get used to it, why not kill two birds with one stone? (only proverbial 🐦🐦)
              Nuxt.js supports generating a static website based on your Vue application. It is the "best of both worlds" as you don't need a server but still have SEO benefits because Nuxt will pre-render all pages and include the necessary HTML. Also, you can deploy the resulting page easily to Netlify or GitHub pages.
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </AlignRowItems>
    <!-- <b-row>
      <b-col cols="12" class="pb-3">
        <b-card tag="article">
          <b-card-body>
            <b-card-title class="title">SINGLE PAGE APPLICATION (SPA)</b-card-title>
            <b-card-text class="text">
              Don't need SSR or Static Site Generation but still want to profit from the benefits that Nuxt provides?
              Are you slowly transitioning your app and want to start lightweight?
              Then the traditional SPA mode will likely be your choice.
              The outcome will be a typical Vue SPA as you know it but influenced by your Nuxt configuration and the framework itself.
            </b-card-text>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>-->
  </b-container>
</template>

<script>
export default {
  props: []
};
</script>
