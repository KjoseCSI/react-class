import axios from "axios";

import { ResUserList } from "../interfaces/reques.response"

export const loadUserAction = async(userPages: number) => {
    const {data} = await axios.get<ResUserList>(`https://reqres.in/api/users?page=${userPages}`)

    return data.data;
}