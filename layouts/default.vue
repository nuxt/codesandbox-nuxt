<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Ana Sayfa</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Arama"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Arama</b-button>
          </b-nav-form>
          <b-nav-item-dropdown text="Sözleşmeler" right>
            <b-dropdown-item href="/sozlesmeler/1">Ana Sözleşme</b-dropdown-item>
            <b-dropdown-item href="#">Sözleşme Düzenle</b-dropdown-item>
            <b-dropdown-item href="#">Sözleşmeleri Listele</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>{{$store.state.authUser.role}}</em>
            </template>
            <b-dropdown-item href="#" @click="login('admin')">admin</b-dropdown-item>
            <b-dropdown-item href="#" @click="login('proje-admin')">proje-admin</b-dropdown-item>
            <b-dropdown-item href="#" @click="login('proje-admin')">muhendis</b-dropdown-item>
            <b-dropdown-item href="#" @click="login('proje-admin')">şantiye şefi</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container">
      <Nuxt/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    async login(role) {
      try {
        await this.$store.dispatch("login", {
          username: role,
          role: role
        });
      } catch (e) {}
    }
  }
};
</script>

<style>
</style>
