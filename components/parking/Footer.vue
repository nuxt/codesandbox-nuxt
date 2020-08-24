<template>
   <div class="footer">
      <div v-for="item in items">
         <a target="_blank" class="item" :href="item.url">{{item.name}}</a>
      </div>
   </div>
</template>

<script>
   export default {
      name: "Footer",
      props: {
         items: {
            type: Array,
            required: true
         }
      }
   }
</script>

<style lang="scss" scoped>
   .footer {
      background-color: #f5f7f9;
      padding: 10px 0 10px 0;
      display: block;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: 12px;
      .item {
         color: #00495A;
         font-weight: 500;
      }
   }
</style>
