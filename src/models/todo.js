import TodoService from "@/serveice/todo.js";
import localStore from "@/helpers/persistaneStorage";

const state = {}

const getters = {}

const mutations = {
    createTodoStart(state) {
    },
    createTodoSuccess(state, user) {

    },
    createTodoFail(state, err) {

        state.err = err
    },
    getTodosStart(state) {
    },
    getTodosSuccess(state, user) {

    },
    getTodosFail(state, err) {

        state.err = err
    },
}

const actions = {
    createTodo(ctx, todo) {
        return new Promise((resolve, reject) => {
            ctx.commit('createTodoStart')

            TodoService.createTodo(todo)
                .then((res) => {
                    if (res.data) {
                        todo = res.data
                        ctx.commit('createTodoSuccess', todo)
                        resolve(todo)
                    } else {
                        ctx.commit('createTodoFail', res.data)
                        reject(res.data)
                    }
                })
                .catch((err) => {
                    ctx.commit('createTodoFail')
                    console.log(`err:`, err)
                })
        })
    },
    getTodos(ctx, {limit, offset}) {
        return new Promise((resolve, reject) => {
            ctx.commit('getTodosStart')

            TodoService.getTodos({limit, offset})
                .then((res) => {
                    if (res.data) {
                        const todos = res.data
                        ctx.commit('getTodosSuccess', todos)
                        resolve(todos)
                    } else {
                        ctx.commit('getTodosFail', res.data)
                        reject(res.data)
                    }
                })
                .catch((err) => {
                    ctx.commit('getTodosFail')
                    console.log(`err:`, err)
                })
        })
    },
}

const todo = {
    state,
    mutations,
    actions,
    getters,
}

export default todo
