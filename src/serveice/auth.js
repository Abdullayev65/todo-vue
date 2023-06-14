import axios from "@/serveice/axios";

const AuthService = {
    register(user) {
        return axios.post("user/sign-up", user)
    },
    login(user) {
        return axios.post("user/log-in", user)
    },
    getUserMe() {
        return axios.get('user/me')
    },
    getUserByUsername(username) {
        return axios.get(`user/${username}`)
    },
    searchUsers(params) {
        return axios.get('user/search', {params})
    },
}


export default AuthService
