<template>
   <div class="header">
      <div class="title">
         Admin Panel
      </div>
      <div class="nav">
         <div class="nav-item" v-for="navItem in items" :class="{selected: navItem.selected }"
              @click="navigate(navItem)">
            {{navItem.name}}
         </div>
      </div>
      <small @click="logout">logout</small>
   </div>
</template>

<script>
   import cookie from "js-cookie";

   export default {
      name: "AdminHeader",
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
               }
            ]
         }
      },
      beforeMount() {
         const path = location.pathname;
         this.items.forEach((item) => {
            item.selected = path === item.path;
         });
      },
      methods: {
         navigate(route) {
            this.$router.push(route.path);
            route.selected = true;
            this.items.forEach((item) => {
               if(item === route) return;
               item.selected = false;
            });
         },

         isSelected(navItem) {
            console.log("DOES", navItem.name, "EQUAL", this.selected);
            return navItem.name === this.selected;
         },

         logout() {
            cookie.remove("token");
            this.$router.push("/admin/login");
         }
      }
   }
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
      .nav {
         flex-grow: 9;
         display: flex;
         .nav-item {
            padding-left: 15px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            &.selected {
               text-decoration: underline;
               font-weight: 600;
            }
         }
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
   }
</style>
