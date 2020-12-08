import { withFormik, Form, Field } from 'formik';
import authService from '../services/AuthService';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { registerSchema } from './forms/validation/auth';

const Register = ({ errors, touched, isSubmiting }) => {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <header className="card-header">
                            <Link to="/login" className="float-right btn btn-outline-primary mt-1">Log In</Link>
                            <h4 className="card-title mt-2">Sign up</h4>
                        </header>
                        <article className="card-body">
                            <Form autoComplete="off">
                                <div className="form-row">
                                    <div className="col form-group">
                                        <label>First name </label>
                                        <Field type="text" name="firstName" className="form-control" placeholder="First Name" />
                                        {touched.firstName && errors.firstName && <small className="form-text text-danger">{errors.firstName}</small>}
                                    </div>
                                    <div className="col form-group">
                                        <label>Last name</label>
                                        <Field type="text" name="lastName" className="form-control" placeholder="Last Name" />
                                        {touched.lastName && errors.lastName && <small className="form-text text-danger">{errors.lastName}</small>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <Field type="email" name="email" className="form-control" placeholder="Email" />
                                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    {touched.email && errors.email && <small className="form-text text-danger">{errors.email}</small>}
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <Field name="password" className="form-control" type="password" />
                                    {touched.password && errors.password && <small className="form-text text-danger">{errors.password}</small>}
                                </div>
                                <div className="form-group">
                                    <label>Confirm password</label>
                                    <Field name="confirmPassword" className="form-control" type="password" />
                                    {touched.confirmPassword && errors.confirmPassword && <small className="form-text text-danger">{errors.confirmPassword}</small>}
                                </div>
                                <div className="form-group">
                                    <button disabled={isSubmiting} type="submit" className="btn btn-primary btn-block"> Register  </button>
                                </div>
                                <small className="text-muted">By clicking the 'Register' button, you confirm that you accept our <br /> Terms of use and Privacy Policy.</small>
                            </Form>
                        </article>
                        <div className="border-top card-body text-center">Have an account? <Link to="/login">Log In</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const FormikRegister = withFormik({
    mapPropsToValues({ firstName, lastName, email, password, confirmPassword }) {
        return {
            firstName: firstName || '',
            lastName: lastName || '',
            email: email || '',
            password: password || '',
            confirmPassword: confirmPassword || ''
        }
    },
    validationSchema: registerSchema,
    handleSubmit(values, { resetForm, setSubmitting, setErrors, props }) {
        const { firstName, lastName, email, password } = values;
        authService.register(firstName, lastName, email, password)
            .then(response => {
                alert(response.data.message);
                resetForm();
                props.history.push("/login");
            })
            .catch(err => {
                setErrors({ email: 'Email is already taken' });
            });

        setSubmitting(false);
    }
})(Register);

export default FormikRegister
