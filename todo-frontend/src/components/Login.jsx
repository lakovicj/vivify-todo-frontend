import { withFormik, Form, Field } from 'formik';
import authService from '../services/AuthService';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { loginSchema } from './forms/validation/auth';

const Login = ({ errors, touched, isSubmiting }) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <header className="card-header">
                            <Link to="/register" className="float-right btn btn-outline-primary mt-1">Register</Link>
                            <h4 className="card-title mt-2">Log In</h4>
                        </header>
                        <article className="card-body">
                            <Form autoComplete="off">
                                <div className="form-group">
                                    <label>Email</label>
                                    <Field type="email" name="email" className="form-control" placeholder="Email" />
                                    {touched.email && errors.email && <small className="form-text text-danger">{errors.email}</small>}
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <Field name="password" className="form-control" type="password" placeholder="Password"/>
                                    {touched.password && errors.password && <small className="form-text text-danger">{errors.password}</small>}
                                </div>
                                <div className="form-group">
                                    {errors.failedLogin && <small className="form-text text-danger">{errors.failedLogin}</small>}
                                </div>
                                <div className="form-group">
                                    <button disabled={isSubmiting} type="submit" className="btn btn-primary btn-block">
                                         LOG IN  
                                    </button>
                                </div>
                            </Form>
                        </article>
                        <div className="border-top card-body text-center">Don't have an account? <Link to="/register">Register</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const FormikLogin = withFormik({
    mapPropsToValues({ email, password }) {
        return {
            email: email || '',
            password: password || ''
        }
    },
    validationSchema: loginSchema,
    handleSubmit(values, { resetForm, setSubmitting, setErrors }) {
        const { email, password } = values;
        authService.login(email, password)
            .then((response) => {
                resetForm();
                alert("You are logged in!");
                props.history.push("/todos");
            })
            .catch((err) => {
                console.log(err);
                setErrors({failedLogin: 'Invalid username and/or password'})
            });

        setSubmitting(false);
    }
}) (Login);

export default FormikLogin;