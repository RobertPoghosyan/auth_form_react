import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';

 import 'testFormik.scss'
 import logo from "assets/logo.svg"
 
 const SignupSchema = Yup.object().shape({
   userName: Yup.string()
     .min(3,"Min length is 3 symbol")
     .required('Required'),
   password: Yup.string()
     .min(6,"Min length is 6 symbol")
     .max(20,"Max length is 20 symbol")
     .required('Required'),
    confirmPassword:Yup.string()
     .oneOf([Yup.ref('password')], 'Incorrect password')
     .required('Required'),
 });
 
 export const TestFormik = () => (
   <div className="app-signUp">
       <div className="app-signUp__form">
            <div className="app-signUp__form__btn">
            
                <img src = {logo} alt="logo"></img>
                <h4>Register now!</h4>
            
            </div>
            <Formik
            initialValues={{
                userName: '',
                password: '',
                confirmPassword: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={initialValues => {
                fetch('http://step.bangits.com/api/Auth/Register',{
                method:'POST',
                headers: { "Content-Type": "application/json" }, 
                body:JSON.stringify(initialValues)
                }) 
                .then((res)=>{
                console.log(res)
                return res.json()
                })
                .then(resJson=>{
                console.log(resJson)
                })
                // same shape as initial values
                //console.log(values);
                alert("Successfully registered")
            }}
            >
            {({ errors, touched }) => (
                <Form className = "signUp">
                    <span>Username*</span>
                <Field className = "input" name="userName" />
                {errors.userName && touched.userName ? (
                    <div>{errors.userName}</div>
                ) : null}
                <span>Password*</span>
                <Field  type = "password"className = "input" name="password" />
                {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                ) : null}
                <span>Confirm password*</span>
                <Field  className = "input" name="confirmPassword" type = "password" />
                {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}
                <button type="submit">Submit</button>
                </Form>
            )}
            </Formik>
     </div>
   </div>
 );

 export default TestFormik;