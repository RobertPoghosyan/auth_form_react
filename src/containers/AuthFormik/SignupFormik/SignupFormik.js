import React from "react";
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';

//import Input from "components/Input/Input";
import logo from "assets/logo.svg"
//import LogoIcon from "icons/LogoIcon";

import './SignupFormik.scss';

const SignupSchema = Yup.object().shape({
    userName: Yup.string()
      .min(3,"Min length is 3 symbol")
      .max(20,"Max length is 20 symbol")
      .required('Required'),
    password: Yup.string()
      .max(20,"Max length is 20 symbol")
      .matches(
        /^.*(?=.{6,})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 6 characters, one uppercase and one number"
      )
      .required('Required'),
     confirmPassword:Yup.string()
      .oneOf([Yup.ref('password')], 'Incorrect password')
      .required('Required'),
  });

export const SignupFormik = (props) => {

  const changePage = () => {
    props.changePage();
  };


  return (
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
                  if(res.status<400){
                    
                    alert("Successfully registered !!!")
                    return res.json()
                  }else {
                    const err = new Error("Network Error:Status code 400 and higher");
                    alert(err)
                    //throw err;
                  }
                })
                .then(resJson=>{
                console.log(resJson)
                })
                
            }}
        
        >
       {({ errors, touched }) => (
           <Form className ="form">
        <span>Username*</span>
        <Field
          name="userName"
          placeholder="Username"
          className="app-signUp__input"
        />
        {errors.userName && touched.userName ? (
            <p className = "errorMessage">{errors.userName}</p>
        ) : null}
        <span>Password*</span>
        <Field
          name="password"
          placeholder="Password"
          type="password"
          className="app-signUp__input"
        />
        {errors.password && touched.password ? (
             <p className = "errorMessage">{errors.password}</p>
        ) : null}
        <span>Confirm password*</span>
        <Field
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          className="app-signUp__input"
        />
        {errors.confirmPassword && touched.confirmPassword ? <p className = "errorMessage">{errors.confirmPassword}</p> : null}
        <button className="app-signUp__form__submit" type="submit" >
          Sign Up
        </button>
        </Form>
       )}
        </Formik>
        <div className="app-signUp__form__reg">
         <span >Do you have an account?</span> <button onClick={changePage}>Sign in!</button>
        </div>
        
      </div>
    </div>
  );
};

export default SignupFormik;