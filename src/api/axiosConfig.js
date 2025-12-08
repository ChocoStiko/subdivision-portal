import axios from "axios";

const api = axios.create({
    baseURL: "http://webdb.chocostiko-lobby.com:82/subd-portal/backend/api",
    headers: {
        "Content-Type": "application/json"
    }
})

export default api;