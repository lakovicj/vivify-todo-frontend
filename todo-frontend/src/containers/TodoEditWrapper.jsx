import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import FormikEditTodo from '../components/Todo/EditTodo';
import todoService from '../services/TodoService';

const TodoEditWrapper = () => {

    const [todo, setTodo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        todoService.getTodo(id).then(response => {
            setTodo(response);
            setIsLoading(false);
        });
    }, [])

    return (
        <div>
            {isLoading ? null : <FormikEditTodo todo={todo} todoId={id} history={history}/>}
        </div>
    )
}

export default TodoEditWrapper;
