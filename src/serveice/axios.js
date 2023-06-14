import axios from "axios";
import localStore from "@/helpers/persistaneStorage";

axios.defaults.baseURL = "http://localhost:8080"

axios.interceptors.request.use(cnfg => {
    const token = localStore.getItem('token')
    const authorization = token

    cnfg.headers.Authorization = authorization

    return cnfg
})

export default axios
