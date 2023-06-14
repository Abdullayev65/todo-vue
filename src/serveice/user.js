import axios from "@/serveice/axios";

const UserService = {
    searchUsers(params) {
        return axios.get('user/search', {params})
    },
}


export default UserService
