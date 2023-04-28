import axios from "axios"
import { USER_API_URL } from "./constents";

async function sendGetRequest(url){
    return await (await axios.get(url)).data;
}

async function sendPostRequest(url, data){
    try{
        const req = await axios.post(url, data);
        return req
    } catch(err) {
        return err
    }
}

export async function loginUser(email, password){
    console.log("email", email, "password", password)
    const data = await sendPostRequest(`${USER_API_URL}/login`, {
        email,
        password
    })
    return data
}