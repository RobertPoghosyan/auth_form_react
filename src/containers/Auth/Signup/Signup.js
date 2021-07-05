import React,{useState} from "react";

import Input from "components/Input/Input";
import logo from "assets/logo.svg"
//import LogoIcon from "icons/LogoIcon";

import './Signup.scss';

export const Signup = (props) => {

  const changePage = () => {
    props.changePage();
  };

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    confirmPassword:"",
  });

  const changeHandler = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value,
      
    });
    
  };

  const handleSignup =  () => {
    fetch('http://step.bangits.com/api/Auth/Register',{
      method:'POST',
      headers: { "Content-Type": "application/json" }, 
      body:JSON.stringify(credentials)
  }) 
    .then((res)=>{
      console.log(res)
      return res.json()
    })
    .then(resJson=>{
      console.log(resJson)
    })
  };

  return (
    <div className="app-signUp">
      <div className="app-signUp__form">
        <div className="app-signUp__form__btn">
           
           <img src = {logo} alt="logo"></img>
           <h4>Register now!</h4>
           
        </div>
        <span>Username*</span>
        <Input
          value = {credentials.username}
          onChange={(e) => changeHandler("username", e.target.value)}
          type = "text"
          placeholder="Username"
          className="app-signUp__input"
        />
        <span>Password*</span>
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
        />
        <button className="app-signUp__form__submit" onClick={handleSignup} >
          Sign Up
        </button>
        <div className="app-signUp__form__reg">
         <span >Do you have an account?</span> <button onClick={changePage}>Sign in!</button>
        </div>
        
      </div>
    </div>
  );
};

export default Signup;