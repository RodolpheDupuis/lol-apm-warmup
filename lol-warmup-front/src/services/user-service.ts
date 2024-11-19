import axios from "axios";

const AUTH_API_URL = 'http://localhost:8000/auth/';

async function signIn(username: string, password: string) {
    try {
        console.log(username, password);
        const response = await axios.post(`${AUTH_API_URL}/sign-in`, { username, password });
        return response.data;
    } catch (error) {
        console.error('Error signing in:', error);
        return error;
    }
}


async function signUp(username: string, password: string) {
    try {
        const response = await axios.post(`${AUTH_API_URL}/sign-up`, { username, password });
        return response.data;
    } catch (error) {
        console.error('Error signing up:', error);
        return error;
    }
}

export { signIn, signUp };