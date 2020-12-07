import React, { useState, useEffect } from 'react'
import todoService from '../services/TodoService';
import TodoTable from '../components/Todo/TodoTable';

const TodoTableWrapper = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todoService.getAllTodos().then(response => setTodos(response));
      }, [])

    return (
        <TodoTable todos={todos}/>
    )
}

export default TodoTableWrapper
