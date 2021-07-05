import React, {useState} from "react";

//import Button from "@material-ui/core/Button";
import Input from "components/Input/Input";
//import LogoIcon from "icons/LogoIcon";
import logo from "assets/logo.svg";

import "./Login.scss";

export const Login = (props) => {

  const changePage = () => {
    props.changePage();
  };

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value,
    });
    
  };

  const handleSignin =  () => {
    fetch('http://step.bangits.com/api/Auth/Login',{
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
    <div className="app-signIn">
      <div className="app-signIn__form">

        <div className="app-signIn__form__logo">
          <img src={logo} alt="logo"></img>
          <h4>Already have an account?</h4>
          <span className = "cool">Cool, just login.</span>
        </div>

        <span className = "input_names">Username</span>
        <Input 
          value = {credentials.username}
          onChange={(e) => changeHandler("username", e.target.value)}
          type = "text"
          placeholder="Username" 
          className="app-signIn__form__input"
       />
        
        <span className = "input_names">Password</span>
        <Input
          value = {credentials.password}
          onChange={(e) => changeHandler("password", e.target.value)}
          placeholder="Password"
          type="password"
          className="app-signIn__form__input"
        />

        <button className="app-signIn__form__submit"  onClick={handleSignin} >Sign In</button>
        
        <div className="app-signIn__form__reg">
          <span>Don't have an account?</span> <button onClick={changePage}>Register now!</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

//<Button classes={{ label: "material_btn" }}>Sign In</Button>
