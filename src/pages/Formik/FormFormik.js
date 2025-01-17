
import { Formik, Form, Field, ErrorMessage} from "formik";
import './FormFormik.css';


export default function FormFormik(){

    const initialValues = {
        firstName: '',
        lastName: '',
        age: ''
    }

    const validate = (values) => {
        const errors = {};


        if (!values.firstName) {
            errors.firstName = "Имя обязательно";
        } else if (values.firstName.length < 2) {
            errors.firstName = "Имя должно быть не менее 2 символов";
        } else if (values.firstName.length > 50) {
            errors.firstName = "Имя не должно превышать 50 символов";
        }


        if (!values.lastName) {
            errors.lastName = "Фамилия обязательна";
        } else if (values.lastName.length < 2) {
            errors.lastName = "Фамилия должна быть не менее 2 символов";
        } else if (values.lastName.length > 50) {
            errors.lastName = "Фамилия не должна превышать 50 символов";
        }


        if (!values.age) {
            errors.age = "Возраст обязателен";
        } else if (!/^\d+$/.test(values.age)) {
            errors.age = "Возраст должен быть числом";
        } else if (parseInt(values.age) < 18) {
            errors.age = "Возраст должен быть не менее 18 лет";
        } else if (parseInt(values.age) > 100) {
            errors.age = "Возраст не может превышать 100 лет";
        }

        return errors;
    };


    const handleSubmit = (values) =>{
       console.log('Submit:', values);
    }


    return(
       <>
           <h1>Form</h1>
           <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
               {({ values }) => (
                   <Form>
                       <div>
                           <label>Name:</label>
                           <Field type='text' name='firstName'/>
                           <ErrorMessage name='firstName' component="div"  className='error'/>
                       </div>
                       <div>
                           <label>LastName:</label>
                           <Field type='text' name='lastName'/>
                           <ErrorMessage name='lastName' component="div"  className='error'/>
                       </div>
                       <div>
                           <label>Age:</label>
                           <Field type='number' name='age'/>
                           <ErrorMessage name='age' component="div"  className='error'/>
                       </div>
                       <button type='submit'>Submit</button>
                   </Form>
               )}

           </Formik>
       </>
    )
}

