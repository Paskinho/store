import axios from "axios";

export const instance = axios.create({
    baseURL:'',
    withCredentials: true,
    headers: {
        "API-KEY": "AIzaSyAQ-BEh6rF56LnxMC9-74L6KY0jq1hWyL0"
    }

})