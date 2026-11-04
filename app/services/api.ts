import axios from "axios";

export const twitchApi = axios.create({
    baseURL: "/api/igdb",
    headers: {
        "Content-Type": "text/plain"
    }
});