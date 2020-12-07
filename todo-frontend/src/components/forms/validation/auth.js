import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    email:      Yup.string().required("Email is required"),
    password:   Yup.string().required("Password is required")
});

const registerSchema = Yup.object().shape({
    firstName:          Yup.string()
                            .max(40, 'First name should be 40 characters max')
                            .required('First name is required'),
    lastName:           Yup.string()
                            .max(40, 'Last name should be 40 characters max')
                            .required('Last name is required'),
    email:              Yup.string()
                            .email('Invalid email')
                            .required('Email is required'),
    password:           Yup.string()
                            .min(5, 'Password should be between 5 and 40 characters')
                            .max(40, 'Password should be between 5 and 40 characters')
                            .required('Password is required'),
    confirmPassword:    Yup.string()
                            .when('password', {
                                is: val => (val && val.length),
                                then: Yup.string().oneOf(
                                    [Yup.ref("password")],
                                    "Passwords do not match"
                                )
                            })
                            .required("You have to confirm password")
});

export { loginSchema, registerSchema }