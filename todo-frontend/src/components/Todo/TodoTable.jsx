import React from 'react';
import TodoRow from './TodoRow';

const TodoTable = ({ todos }) => {
    console.log("Todos u TodoTable: ", todos);
    const todoItems = todos.map((item) => <TodoRow key={item.id} todo={item}/>);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Completed</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {todoItems}
            </tbody>
        </table>
    )
}

export default TodoTable;
