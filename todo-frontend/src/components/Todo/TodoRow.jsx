import React from 'react';

const TodoRow = ({ todo }) => {

    const handleDoneClick = () => {
        console.log("Done");
    }

    const handleEditClick = () => {
        console.log("Edit");
    }

    const handleDeleteClick = () => {
        console.log("Delete");
    }

    const prioritySpan = (priority) => {
        if (priority === "high") {
            return <span class="badge badge-danger">{priority.toUpperCase()}</span>
        } else if (priority === "medium") {
            return <span class="badge badge-warning">{priority.toUpperCase()}</span>
        } else {
            return <span class="badge badge-primary">{priority.toUpperCase()}</span>
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
                <button key={"done-" + todo.id} className="btn btn-dark" onClick={handleDoneClick}>Done</button>
                <button key={"edit-" + todo.id} className="btn btn-warning" onClick={handleEditClick}>Edit</button>
                <button key={"delete-" + todo.id} className="btn btn-danger" onClick={handleDeleteClick}>Delete</button>
            </td>
        </tr>
    )
}

export default TodoRow
