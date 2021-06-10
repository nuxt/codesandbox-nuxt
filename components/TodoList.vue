<template>
  <div>
    <v-btn class="mx-2" fab dark color="indigo" @click="addTotoItem">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>

    <v-list two-line>
      <!-- 그룹 내 요소들을 클릭할 때 마다 selected 배열 data의 값이 추가되거나 삭제 됨 -->
      <v-list-item-group v-model="selected" active-class="gray--text" multiple>
        <todo-item
          v-for="(item, index) in todoItems"
          :item="item"
          :key="index"
        ></todo-item>
      </v-list-item-group>
    </v-list>
  </div>
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
    // TODO ...
    items() {
      console.log("localstorage", localStorage);
      return this.todoItems;
    },
  },
  data() {
    return {
      selectedItem: [],
      todoItems: [],
    };
  },
  methods: {
    addTotoItem() {
      const originalItems = localStorage.getItem("items");
      const items = JSON.parse(originalItems) || [];
      items.push({
        action: "15 min",
        subtitle: "밥먹고 배불러서 누워 있을 것",
        title: "밥먹기",
      });
      this.items = items;
    },
  },
};
</script>