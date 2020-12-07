import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormikRegister from './components/Register';
import FormikLogin from './components/Login';
import { Switch, Route, Link } from 'react-router-dom';
import { Formik } from 'formik';

function App() {
  return (
      <div class="container">
        <Switch>
          <Route path="/login" component={FormikLogin}></Route>
          <Route path="/register" component={FormikRegister}></Route>
        </Switch>
      </div>
  );
}

export default App;
