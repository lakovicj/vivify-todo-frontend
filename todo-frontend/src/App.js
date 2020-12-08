import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormikRegister from './components/Register';
import FormikLogin from './components/Login';
import FormikCreateTodo from './components/Todo/CreateTodo';
import { Switch, Route } from 'react-router-dom';
import TodoTableWrapper from './containers/TodoTableWrapper';

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
          <Route path="/todos" component={TodoTableWrapper}></Route>
          <Route path="/create" component={FormikCreateTodo}></Route>
        </Switch>
      </div>
  );
}

export default App;
