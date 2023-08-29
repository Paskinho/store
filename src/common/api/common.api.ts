import axios from "axios";

export const instance = axios.create({
    baseURL:'https://back-for-store-default-rtdb.firebaseio.com/',
    withCredentials: true,
    headers: {
        "API-KEY": "AIzaSyAQ-BEh6rF56LnxMC9-74L6KY0jq1hWyL0",
        "Access-Control-Allow-Origin": "*"
    }
})