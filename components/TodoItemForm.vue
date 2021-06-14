<template>
  <v-card v-if="isActive">
    <v-toolbar flat color="blue-grey" dark>
      <v-toolbar-title>할일 입력</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-text-field
        filled
        label="제목"
        v-model="titleValue"
        placeholder="제목을 입력하세요."
      ></v-text-field>

      <v-textarea
        filled
        label="내용"
        v-model="contentValue"
        placeholder="내용을 입력하세요."
      ></v-textarea>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success" depressed> 등록 </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      titleValue: "",
      contentValue: "",
    };
  },
  methods: {},
  watch: {
    isActive(value) {
      if (!value) {
        this.titleValue = "";
        this.contentValue = "";
      }
    },
  },
};
</script>