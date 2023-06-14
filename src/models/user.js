import UserService from "@/serveice/user.js";
import localStore from "@/helpers/persistaneStorage";

const state = {
    isLoading: false,
    user: null,
    err: null,
    isLoggedIn: false
}

const getters = {
}

const mutations = {
    searchUsersStart(state) {
        state.isLoading = true
    },
    searchUsersSuccess(state, user) {
        state.isLoading = false
        state.user = user
        state.isLoggedIn = true
    },
    searchUsersFail(state, err) {
        state.isLoading = false
        state.err = err
        state.user = null
        state.isLoggedIn = false
    },
}

const actions = {
    searchUsers(ctx, params) {
        return new Promise((resolve, reject) => {
            ctx.commit('searchUsersStart')

            UserService.searchUsers(params)
                .then((res) => {
                    console.log(res)
                    if (res.data['status']) {
                        ctx.commit('searchUsersSuccess', res.data)
                        resolve(res.data)
                    } else {
                        ctx.commit('searchUsersFail', res.data['msg'])
                        reject(res.data['msg'])
                    }
                })
                .catch((err) => {
                    ctx.commit('searchUsersFail', err)
                    console.log(`err:`, err)
                    reject(err)
                })
        })
    },
}

const user = {
    state,
    mutations,
    actions,
    getters,
}

export default user
