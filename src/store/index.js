import {createStore} from 'vuex'
import auth from "@/models/auth.js"
import todo from "@/models/todo.js"
import user from "@/models/user.js";

const store = createStore({
    state() {
        return {
            lastSetHashword: '',
            hashwordMap: new Map(),
            setHashword(hashwordId, hashword) {
                store.state.hashwordMap.set(hashwordId, hashword)
                store.state.lastSetHashword = hashwordId
            },
            getHashword(hashwordId) {
                return store.state.hashwordMap.get(hashwordId)
            },

        }
    },
    mutations: {},
    actions: {},
    modules: {
        auth, user, todo
    }
})

export default store
