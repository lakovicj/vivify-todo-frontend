import axios from 'axios';
import authService from './AuthService';

const API_URL = 'http://localhost:8000/api/todos';

class TodoService {
    constructor() {
        this.authHeader = authService.getAuthorizationHeader();
    }

    getAllTodos = async () => {
        const response = await axios.get(API_URL, {headers: this.authHeader});
        if (response.data) {
            return response.data;
        }
        else {
            return [];
        }
    }

    deleteTodo = async (todoId) => {
        const response = await axios.delete(`${API_URL}/${todoId}`, {headers: this.authHeader});
        if (response.data) {
            return response.data;
        }
    }

    createTodo = async (title, description, priority) => {
        const newTodo = {title, description, priority};
        const response = await axios.post(API_URL, newTodo, {headers: this.authHeader});
        if (response.data) {
            return response.data;
        }
    }
}

const todoService = new TodoService();

export default todoService;