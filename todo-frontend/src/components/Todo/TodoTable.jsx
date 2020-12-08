import React from 'react';
import TodoRow from './TodoRow';
import { Link } from 'react-router-dom';

const TodoTable = ({ todos }) => {
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
                    <th><Link to="/create" className="btn btn-primary">New Todo</Link></th>
                </tr>
            </thead>
            <tbody>
                {todoItems}
            </tbody>
        </table>
    )
}

export default TodoTable;
