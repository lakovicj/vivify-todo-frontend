import React from 'react';
import todoService from '../../services/TodoService';
import { Redirect } from 'react-router-dom';

const TodoRow = ({ todo }) => {

    const handleDoneClick = (todoId) => {
        console.log("Done");
    }

    const handleEditClick = (todoId) => {
        console.log("Edit");
    }

    const handleDeleteClick = (todoId) => {
        todoService.deleteTodo(todoId)
                .then((response) => {
                    alert("Todo deleted!");
                    window.location.reload();
                    //return <Redirect to="/todos"></Redirect>
                })
    }

    const prioritySpan = (priority) => {
        if (priority === "high") {
            return <span className="badge badge-danger">{priority.toUpperCase()}</span>
        } else if (priority === "medium") {
            return <span className="badge badge-warning">{priority.toUpperCase()}</span>
        } else {
            return <span className="badge badge-primary">{priority.toUpperCase()}</span>
        }
    }

    return (
        <tr key={todo.id}>
            <td key={"title-" + todo.id}>{todo.title}</td>
            <td key={"descr-" + todo.id}>{todo.description}</td>
            <td key={"prior-" + todo.id}>
                {prioritySpan(todo.priority)}
            </td>
            <td key={"compl-" + todo.id}>{todo.completed ? "Yes" : "No"}</td>
            <td key={"acts-" + todo.id}>
                <button key={"done-" + todo.id} className="btn btn-dark" onClick={() => handleDoneClick(todo.id)}>Done</button>
                <button key={"edit-" + todo.id} className="btn btn-warning" onClick={() => handleEditClick(todo.id)}>Edit</button>
                <button key={"delete-" + todo.id} className="btn btn-danger" onClick={() => handleDeleteClick(todo.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default TodoRow
