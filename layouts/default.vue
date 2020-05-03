<template>
  <v-app>
    <v-app-bar dark app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Mekatronik AP</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text color="white" nuxt-link to="/">Home</v-btn>
      <v-btn text color="white" nuxt-link to="/services">Services</v-btn>
      <v-btn text color="white">Works</v-btn>
      <v-btn text color="white">Products</v-btn>
      <v-btn text color="white">Blog</v-btn>

      <!-- <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>-->
    </v-app-bar>
    <v-content>
      <Nuxt/>
    </v-content>
    <v-footer dark app absolute>
      <span class="white--text caption">&copy; 2020 - By REA during WFH & Lockdown</span>
    </v-footer>
  </v-app>
</template>

<style>
</style>
