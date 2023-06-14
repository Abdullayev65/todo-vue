<template>

  <div class="list-group list-group-horizontal-md" v-if="!deleted">

    <input v-model="todo.task"
           :id="todo.id"
           v-on:keyup.enter="updateTask"
           @focusout="updateTask"
           class="task list-group-item">

    <div @click="updateDone"
         :class="todo.done?'type-done':'type-in-progress'"
         class="todo-type list-group-item">
      {{ todo.done ? 'done' : 'in progress' }}
    </div>

    <button class="btn btn-secondary delete-todo list-group-item"
            @click="deleteTodo">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash"
           viewBox="0 0 16 16">
        <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
        <path
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
      </svg>
    </button>

  </div>


</template>

<script>

import localStore from "@/helpers/persistaneStorage";

export default {
  data() {
    return {
      deleted: false,
    }
  },
  props: {
    todo: {
      type: Object,
      required: true,
    }
  },
  methods: {
    updateTask() {
      document.getElementById(this.todo.id).blur();
      this.updateTodo()
    },
    updateDone() {
      this.todo.done = !this.todo.done
      this.updateTodo()
    },
    deleteTodo() {
      this.deleted = true
      this.$store.dispatch("deleteTodo", this.todo.id)
          .then(() => {
          }).catch(err => {
        alert(err)
      })
    },
    updateTodo() {
      this.$store.dispatch("updateTodo", this.todo)
          .then(() => {
          }).catch(err => {
        alert(err)
      })
    },
  },
  computed: {},
}
</script>

<style scoped>
.list-group-item {
  float: left;
}

.task {
  width: 700px;
}

.todo-type {
  width: 200px;
  text-align: center;
  cursor: pointer;
}

.delete-todo {
  width: 70px;
  text-align: center;
}

.type-done {
  background-color: yellowgreen;
}

.type-in-progress {
  background-color: dodgerblue;
}

</style>