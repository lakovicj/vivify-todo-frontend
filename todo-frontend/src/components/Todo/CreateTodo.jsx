import { withFormik, Form, Field } from 'formik';
import todoService from '../../services/TodoService';
import createTodoSchema from '../forms/validation/todoSchemas';
import React from 'react'

const CreateTodo = ({ touched, isSubmiting, errors }) => {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <header className="card-header">
                            <h4 className="card-title mt-2">NEW TODO</h4>
                        </header>
                        <article className="card-body">
                            <Form autoComplete="off">
                                <div className="form-group">
                                    <label>Title</label>
                                    <Field type="text" name="title" className="form-control" placeholder="Title" />
                                    {touched.title && errors.title && <small className="form-text text-danger">{errors.title}</small>}
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <Field name="description" className="form-control" type="text" placeholder="Description"/>
                                    {touched.description && errors.description && <small className="form-text text-danger">{errors.description}</small>}
                                </div>
                                <div className="form-group">
                                    <label>Priority</label>
                                    <Field component="select" name="priority">
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </Field>
                                </div>
                                <div className="form-group">
                                    <button disabled={isSubmiting} type="submit" className="btn btn-primary btn-block">
                                         CREATE 
                                    </button>
                                </div>
                            </Form>
                        </article>
                    </div>
                </div>
            </div>
        </div>

    )
}

const FormikCreateTodo = withFormik({
    mapPropsToValues({ title, description, priority }) {
        return {
            title: title || '',
            description: description || '',
            priority: priority || 'low'
        }
    },
    validationSchema: createTodoSchema,
    handleSubmit(values, { resetForm, setSubmitting, props }) {
        const { title, description, priority } = values;
        todoService.createTodo(title, description, priority)
                    .then(response => {
                        resetForm();
                        alert("Todo created!");
                        props.history.push('/todos');
                    })
        setSubmitting(false);
    }
}) (CreateTodo);

export default FormikCreateTodo;
