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
}

const authService = new AuthService();

export default authService;