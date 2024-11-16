import axios from "axios";

const USER_API_URL = 'http://localhost:3000/api/user';

export default async function signIn(username: string, password: string) {
    try {
        const response = await axios.post(`${USER_API_URL}/signin`, { username, password });
        return response.data;
    } catch (error) {
        console.error('Error signing in:', error);
        return error;
    }
}
