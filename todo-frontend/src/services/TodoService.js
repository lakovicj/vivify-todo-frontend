import axios from 'axios';
import authService from './AuthService';

const API_URL = 'http://localhost:8000/api/todos';

class TodoService {
    constructor() {
        this.authHeader = authService.getAuthorizationHeader();
    }

    getAllTodos = async () => {
        console.log("Usao u getAllTodos");
        const response = await axios.get(API_URL, {headers: this.authHeader});
        console.log("waiting.....");
        console.log(response);
        console.log(response.data);
        if (response.data) {
            console.log("Got data... returnig it...");
            console.log(response.data);
            return response.data;
        }
        else {
            return [];
        }
    }
}

const todoService = new TodoService();

export default todoService;