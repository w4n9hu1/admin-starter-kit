import axios from "axios";

export async function getTasks(): Promise<Task[]> {
    const userAuthConfig = await axios.get('http://localhost:3000/tasks');
    return userAuthConfig.data;
}