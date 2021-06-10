<template>
  <v-list two-line>
    <!-- 그룹 내 요소들을 클릭할 때 마다 selected 배열 data의 값이 추가되거나 삭제 됨 -->
    <v-list-item-group v-model="selected" active-class="gray--text" multiple>
      <todo-item
        v-for="(item, index) in items"
        :item="item"
        :key="index"
      ></todo-item>
    </v-list-item-group>
  </v-list>
</template>
<script>
import TodoItem from "../components/TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
  computed: {
    selected: {
      get() {
        console.log(this.selectedItem);
        return this.selectedItem;
      },
      set(item) {
        this.selectedItem = item;
      },
    },
  },
  data() {
    return {
      selectedItem: [2],
      items: [
        {
          action: "15 min",
          title: "밥먹기",
          subtitle: `밥먹고 배불러서 누워 있을 것`,
        },
        {
          action: "2 hr",
          title: "숨쉬기",
          subtitle: `숨쉬는게 제일 힘듦`,
        },
        {
          action: "6 hr",
          title: "잠자기",
          subtitle: "누워서 열심히 자기",
        },
        {
          action: "12 hr",
          title: "걷기",
          subtitle: "바깥 공기나 쐬러 걷기",
        },
      ],
    };
  },
};
</script>