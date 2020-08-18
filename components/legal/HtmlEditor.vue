<template>
   <vue-editor @text-change="$emit('input', content)" :editorToolbar="customToolbar" v-model="content"></vue-editor>
</template>

<script>
   import { VueEditor } from "vue2-editor";

   export default {
      name: "HtmlEditor",
      components: {
         VueEditor
      },
      props: {
         value: {
            type: String
         }
      },
      mounted() {
         this.content = this.value;
      },
      data() {
         return {
            content: "",
            customToolbar: [[{ 'header': [1, 2, 3, false] }], ["bold", "italic", "underline"], [{ list: "ordered" }, { list: "bullet" }]]
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

   /deep/ .ql-formats {
      button {
         margin: 0;
      }
   }
</style>
