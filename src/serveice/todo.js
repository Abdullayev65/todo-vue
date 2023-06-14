import axios from "@/serveice/axios";

const TodoService = {
    createTodo(todo) {
        return axios.post("todo/create", todo)
    },
    getTodos(params) {
        return axios.get(`todo/list`, {params})
    },
    updateTodo(todo) {
        return axios.put(`todo/update/${todo.id}`, todo)
    },
    deleteTodo(id) {
        return axios.delete(`todo/delete/${id}`)
    },
}


export default TodoService
