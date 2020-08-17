<template>
   <nav>
      <div class="nav-item" v-for="navItem in items" :class="{selected: navItem.selected }"
           @click="navigate(navItem)">
         {{navItem.name}}
      </div>
   </nav>
</template>

<script>
   export default {
      name: "Navigation",
      props: {
         items: {
            type: Array,
            required: true
         }
      },
      methods: {
         navigate(route) {
            this.$router.push(route.path);
            route.selected = true;
            this.items.forEach((item) => {
               if (item === route) return;
               item.selected = false;
            });
         },

         isSelected(navItem) {
            return navItem.name === this.selected;
         }
      }
   }
</script>

<style lang="scss" scoped>
   nav {
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
</style>
