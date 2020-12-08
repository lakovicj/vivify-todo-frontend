import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormikRegister from './components/Register';
import FormikLogin from './components/Login';
import { Switch, Route, Link } from 'react-router-dom';
import TodoTable from './components/Todo/TodoTable';
import todoService from './services/TodoService'

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    todoService.getAllTodos().then(response => setTodos(response));
  }, [])

  return (
      <div className="container">
        <Switch>
          <Route path="/login" component={FormikLogin}></Route>
          <Route path="/register" component={FormikRegister}></Route>
          <Route path="/todos" component={() => <TodoTable todos={todos} />}></Route>
        </Switch>
      </div>
  );
}

export default App;
