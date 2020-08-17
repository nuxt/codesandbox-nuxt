<template>
   <div class="editable-container" contenteditable="true" @input="updateHTML">
   </div>
</template>

<script>
   export default {
      name: "HtmlEditor",
      props: {
         value: {
            type: String
         }
      },
      mounted() {
         this.$el.innerHTML = this.value;
      },
      methods: {
         updateHTML: function (e) {
            this.$emit('input', e.target.innerHTML);
         }
      }
   }
</script>

<style lang="scss" scoped>
   .editable-container {
      height: 200px;
      background: white;
   }

   .toolbar {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 15px;
      .toolbar-item {
         border: 1px solid black;
         border-radius: 10px;
         margin-right: 15px;
         padding: 5px;
         text-decoration: underline;
         cursor: pointer;
         &.active {
            background: white;
            color: black;
         }
      }
   }
</style>
