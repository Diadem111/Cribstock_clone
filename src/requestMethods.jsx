import axios from  "axios";

const MY_URL = "http://localhost:4000/user/";

export const publicRequest = axios.create({
    baseURL : MY_URL,
})