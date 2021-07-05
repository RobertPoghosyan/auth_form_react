import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import logo from "assets/logo.svg";

import './ValidationSchema.scss';

const initialValues = {
  userName: "",
  password:"",
  confirmPassword:""
}

const validationSchema = Yup.object().shape({
  userName: Yup.string()
  .min(3,"Min length is 3 symbol")
  .typeError("Must be string")
  .required("Required"),
  password:Yup.string()
  .min(6,"Min length is 6 symbol")
  .max(20,"Max length is 20 symbol")
  .typeError("Must be string")
  .required("Required"),
  confirmPassword:Yup.string()
  .oneOf([Yup.ref('password')], 'Incorrect password')
  .required("Required")
})

const onSubmit = (values)=>{
  console.log(values)
  console.log("hello")
}
const Register = () => {



  return (
    <div>
      <Formik
        initialValues = {initialValues}
        validateOnBlur
        onSubmit = {onSubmit}
        validationSchema = {validationSchema}
      >
        {({values,errors,touched,handleChange,handleBlur,isValid,handleSubmit,dirty}) =>(

<div className="app-signUp">
  <div className="app-signUp__form">
    <div className="app-signUp__form__btn">
     
     <img src = {logo} alt="logo"></img>
     <h4>Register now!</h4>
     
    </div>
    <span>Username*</span>
    <Input
      type = "text"
      name = "userName"
      id = "userName"
      onChange = {handleChange}
      onBlur = {handleBlur}
      value = {values.userName}
      placeholder="Username"
      className="app-signUp__input"
    />
    {/* <span>Password*</span>
    <Input
      value = {credentials.password}
      onChange={(e) => changeHandler("password", e.target.value)}
      placeholder="Password"
      type="password"
      className="app-signUp__input"
    />
    <span>Confirm password*</span>
    <Input
      value = {credentials.confirmPassword}
      onChange={(e) => changeHandler("confirmPassword", e.target.value)}
      placeholder="Confirm Password"
      type="password"
      className="app-signUp__input"
    /> */}
    {touched.name && errors.name && <p className = {`error`}>{errors.name}</p>}
    <button className="app-signUp__form__submit" onClick={handleSubmit} disabled = {!isValid && !dirty} type = "submit" >
      Sign Up
    </button>
    <div className="app-signUp__form__reg">
    <span >Do you have an account?</span> <button /*onClick={changePage}*/>Sign in!</button>
    </div>
  
  </div>
</div>
          // <div className = {'form'}>
          //   <p>
          //     <label htmlFor = {`name`}>Name</label><br/>
          //     <input
          //       type = {`text`}
          //       name = {`name`}
          //       onChange = {handleChange}
          //       onBlur = {handleBlur}
          //       value = {values.name}
          //       className={'input'}
          //     />  
          //   </p>
          //   {touched.name && errors.name && <p className = {`error`}>{errors.name}</p>}
          //   <button 
          //     disabled = {!isValid && !dirty}
          //     onClick = {handleSubmit}
          //     type = {`submit`}
          //   >Submit</button>
          // </div>
        )}

      </Formik>
    </div>
  )
}

export default Register;
