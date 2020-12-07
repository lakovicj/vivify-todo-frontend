import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth';

class AuthService {
    constructor() {

    }

    register = (firstName, lastName, email, password) => {
        const newUser = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password, password
        };
        return axios.post(API_URL + "/register", newUser);
    }

    login = async (email, password) => {
        const credentials = { email, password };
        const response = await axios.post(API_URL + "/login", credentials);

        if (response.data.access_token) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    }

    getToken = () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user).access_token : undefined;
    }

    getUser = () => {
        const user = localStorage.getItem('user');
        return JSON.parse(user);
    }
}

const authService = new AuthService();

export default authService;