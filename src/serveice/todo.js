import axios from "@/serveice/axios";

const TodoService = {
    createTodo(todo) {
        return axios.post("todo/create", todo)
    },
    getTodos(params) {
        return axios.get(`todo/list`, {params})
    },
}


export default TodoService
