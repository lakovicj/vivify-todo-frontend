import * as Yup from 'yup';

 const createTodoSchema =    Yup.object().shape({
     title:                  Yup.string().required('Title is required'),
     desciption:             Yup.string(),
     priority:               Yup.string().required('Priority is required')
 })

 export default { createTodoSchema } 