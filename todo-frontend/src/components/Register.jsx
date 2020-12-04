import { withFormik, Form, Field, yupToFormErrors } from 'formik';
import authService from '../services/AuthService';
import * as Yup from 'yup';

const Register = ({ errors, touched, isSubmiting }) => {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <header className="card-header">
                            <a href="" className="float-right btn btn-outline-primary mt-1">Log in</a>
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
                        <div className="border-top card-body text-center">Have an account? <a href="">Log In</a></div>
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
    validationSchema: Yup.object().shape({
        firstName: Yup.string()
            .max(40, 'First name should be 40 characters max')
            .required('First name is required'),
        lastName: Yup.string()
            .max(40, 'Last name should be 40 characters max')
            .required('Last name is required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
        password: Yup.string()
            .min(5, 'Password should be between 5 and 40 characters')
            .max(40, 'Password should be between 5 and 40 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .when('password', {
                is: val => (val && val.length),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Passwords do not match"
                )
            })
            .required("You have to confirm password")
    }),
    handleSubmit(values, { resetForm, setSubmitting, setErrors }) {
        const { firstName, lastName, email, password } = values;
        authService.register(firstName, lastName, email, password)
            .then(response => {
                alert(response.data.message);
                resetForm();
            })
            .catch(err => {
                setErrors({ email: 'Email is already taken' });
            });

        setSubmitting(false);
    }
})(Register);

export default FormikRegister
