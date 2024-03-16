<script setup lang="ts">
import { reactive } from "vue";
import TodoState from "../models/todoState";
import TodoButton from "./TodoButton.vue";

const emit = defineEmits(["create-todo"]);

const todoState = reactive<TodoState>({
  todoText: "",
  inValid: null,
  errMsg: "",
});

const createTodo = () => {
  todoState.inValid = null;
  if (todoState.todoText != "") {
    emit("create-todo", todoState.todoText);
    todoState.todoText = "";
    return;
  }

  todoState.inValid = true;
  todoState.errMsg = "Todo value cannot be empty";
};
</script>

<template>
  <div class="input-wrap" :class="{ 'input-err': todoState.inValid }">
    <input v-model="todoState.todoText" type="text" />
    <TodoButton @click="createTodo" />
  </div>
  <p v-show="todoState.inValid" class="err-msg">{{ todoState.errMsg }}</p>
</template>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 2px solid #41b080;

  &.input-err {
    border-color: red;
  }

  &:focus-within {
    box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1),
      0 -2px 4px -2px rgb(0 0 0 / 0.1);
  }

  input {
    width: 100%;
    padding: 8px 6px;
    border: none;

    &:focus {
      outline: none;
    }
  }
}

.err-msg {
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  color: red;
}
</style>
