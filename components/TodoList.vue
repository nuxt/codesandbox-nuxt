<template>
  <v-container>
    <v-row>
      <v-col>
        <todo-item-form
          :isActive="isInputFormActive"
          @switch-input-form="openTodoInputForm"
          @add-item="addTodoItem"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-list two-line>
          <!-- 그룹 내 요소들을 클릭할 때 마다 selected 배열 data의 값이 추가되거나 삭제 됨 -->
          <v-list-item-group
            v-model="selected"
            active-class="gray--text"
            multiple
          >
            <todo-item
              v-for="item in todoItems"
              :item="item"
              :key="item.id"
              @remove-item="removeItem"
            ></todo-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          fab
          dark
          color="indigo"
          @click="openTodoInputForm"
          style="float: right"
          v-if="items.length < 5"
        >
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import TodoItemForm from "../components/TodoItemForm.vue";
import TodoItem from "../components/TodoItem.vue";

export default {
  components: {
    TodoItemForm,
    TodoItem,
  },
  computed: {
    selected: {
      get() {
        return this.selectedItem;
      },
      set(item) {
        this.selectedItem = item;
      },
    },
    // TODO ...
    items: {
      get() {
        return this.todoItems;
      },
      set(items) {
        this.todoItems = items;
        localStorage.setItem("items", JSON.stringify(this.todoItems));
      },
    },
  },
  data() {
    return {
      selectedItem: [],
      todoItems: [],
      itemSeq: 0,
      isInputFormActive: false,
    };
  },
  methods: {
    openTodoInputForm() {
      this.isInputFormActive = !this.isInputFormActive;
    },
    addTodoItem(item) {
      //const originalItems = localStorage.getItem("items");
      //const items = JSON.parse(originalItems) || [];
      this.itemSeq += 1;

      item["id"] = this.itemSeq;
      /*
      {
        id: this.itemSeq,
        action: "15 min",
        subtitle: "밥먹고 배불러서 누워 있을 것",
        title: "밥먹기",
      }
      */
      this.items.push(item);

      localStorage.setItem("items", JSON.stringify(this.items));
    },
    removeItem(id) {
      this.items.forEach((item, index) => {
        if (item.id === id) {
          this.items.splice(index, 1);
          return;
        }
      });
      // 명시적으로 값 세팅을 안해주면, 변경 사항을 감지하여 setter 호출이 안되는듯..
      this.items = this.items;
    },
  },
  // mounted 이전에는 local storage를 사용할 수 없다.
  mounted() {
    const todoItems = JSON.parse(localStorage.getItem("items") || "[]");
    todoItems.forEach((item, index) => {
      this.items.push(item);
    });

    const itemLength = this.items.length;
    if (itemLength) {
      this.itemSeq = this.items[itemLength - 1].id;
    }
  },
};
</script>