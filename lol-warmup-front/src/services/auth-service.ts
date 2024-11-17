export const AuthService = {
    setToken: (token: string) => {
        localStorage.setItem('accessToken', token);
    },

    getToken: () => {
        return localStorage.getItem('accessToken');
    },

    removeToken: () => {
        localStorage.removeItem('accessToken');
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('accessToken');
    },
}