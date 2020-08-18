<template>
  <div class="header">
    <div class="title">Admin Panel</div>
    <Navigation :items="items"></Navigation>
    <small class="logout" @click="logout">logout</small>
  </div>
</template>

<script>
import cookie from "js-cookie";
import Navigation from "@/components/Navigation";

export default {
  name: "AdminHeader",
  components: {
    Navigation
  },
  data() {
    return {
      items: [
        {
          name: "Voucher",
          path: "/admin",
          selected: false
        },
        {
          name: "Parking",
          path: "/admin/parking",
          selected: false
        },
        {
          name: "Legal",
          path: "/admin/legal",
          selected: false
        }
      ]
    };
  },
  beforeMount() {
    const path = location.pathname;
    this.items.forEach(item => {
      item.selected = path === item.path;
    });
  },
  methods: {
    logout() {
      cookie.remove("token");
      this.$router.push("/admin/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  margin: 15px;
  height: 55px;
  line-height: 55px;
  .title {
    flex-grow: 1;
    font-size: 25px;
    font-weight: bold;
  }
  small {
    flex-grow: 1;
    text-align: right;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 400;
    :hover {
      cursor: pointer;
      color: rgba(0, 0, 0, 1);
    }
  }
  .logout {
    cursor: pointer;
  }
}
</style>
