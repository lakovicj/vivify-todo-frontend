import React, { useState, useEffect} from 'react'
import todoService from '../services/TodoService';
import TodoTable from '../components/Todo/TodoTable';
import authService from '../services/AuthService';
import { useHistory } from 'react-router-dom';

const TodoTableWrapper = () => {

    const [todos, setTodos] = useState([]);
    let history = useHistory();

    useEffect(() => {
        
        if (!authService.getUser()) {
            alert("Please login first!");
            history.push("/login");
        }
        todoService.getAllTodos().then(response => setTodos(response));
      }, [])

    return (
        <TodoTable todos={todos}/>
    )
}

export default TodoTableWrapper
