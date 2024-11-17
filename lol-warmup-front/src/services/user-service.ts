import axios from "axios";

const AUTH_API_URL = 'http://localhost:8000/auth/sign-in';

export default async function signIn(username: string, password: string) {
    try {
        console.log(username, password);
        const response = await axios.post(`${AUTH_API_URL}/`, { username, password });
        return response.data;
    } catch (error) {
        console.error('Error signing in:', error);
        return error;
    }
}
