<template>
  <v-list-item :key="item.title">
    <!-- 슬롯 템플릿. 클릭 시 마다 active 라는 변수의 값이 true/false 로 바뀜 -->
    <template v-slot:default="{ active }">
      <v-list-item-content>
        <v-list-item-title v-text="item.title"></v-list-item-title>

        <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
      </v-list-item-content>

      <!-- action에 따른 icon item 설정 -->
      <v-list-item-action>
        <v-list-item-action-text v-text="item.action"></v-list-item-action-text>

        <v-icon v-if="active" color="yellow darken-3"> mdi-check </v-icon>
      </v-list-item-action>
    </template>
  </v-list-item>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>