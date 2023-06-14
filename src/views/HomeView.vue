<template>
  <h2>Home</h2>

  <div class="add-mind-box">

    <label class="filled add-mind-label">
      <input class="add-mind-input "
             id="add-new-todo"
             type="text" required
             v-model="newTodo"
             v-on:keyup.enter="makeNewTopic"
             @focusout="makeNewTopic">
      <span data-label="Enter new topic"></span>
    </label>

  </div>

  <div v-if="todos && todos.length>1" class="list-group">
    <TodoBox v-for="todo in todos"
             :todo="todo"
             class="list-group-item list-group-item-action" />
  </div>

</template>

<script>
import TodoBox from "@/components/TodoBox.vue";

export default {
  data() {
    return {
      todos: [],
      newTodo: '',
    }
  },
  methods: {
    makeNewTopic() {
      const newTodo = this.newTodo
      this.newTodo = ''
      if (!newTodo)
        return

      const new_todo = {
        task: newTodo,
        done: false,
      }

      this.$store.dispatch('createTodo', new_todo)
          .then((todo) => {
            this.todos.push(todo)
          })
          .catch((err) => {
            alert(err)
          })
    },
    getTodosFromService() {
      this.$store.dispatch('getTodos', {})
          .then((todos) => {
            this.todos = todos
          })
          .catch((err) => {
            alert(err)
          })
    },
  },
  mounted() {
    this.getTodosFromService()
  },
  components: {
    TodoBox
  }
}
</script>


<style scoped>

</style>
