import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost/subdivision-portal-local/backend/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

export default api;