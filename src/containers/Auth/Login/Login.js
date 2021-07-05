import React from "react";
import { Formik, Form, Field } from "formik";

import { loginSchema } from "validate/loginSchema";
import { loginSubmit } from "api/service";
import logo from "assets/logo.svg";

import "../Auth.scss";

export const Login = (props) => {
  const changePage = () => {
    props.changePage();
  };

  const initialValues = {
    userName: "",
    password: "",
  };

  return (
    <div className="app-sign">
      <div className="app-sign__form">
        <div className="app-sign__form__logo">
          <img src={logo} alt="logo"></img>
          <h4>Already have an account?</h4>
          <span className="cool">Cool, just login.</span>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={loginSubmit}
        >
          {({ errors, touched }) => (
            <Form className="form">
              <span className="input_names">Username</span>
              <Field
                name="userName"
                type="text"
                placeholder="Username"
                className="app-sign__form__input"
              />
              {errors.userName && touched.userName ? (
                <p className="errorMessage">{errors.userName}</p>
              ) : null}
              <span className="input_names">Password</span>
              <Field
                name="password"
                placeholder="Password"
                type="password"
                className="app-sign__form__input"
              />
              {errors.password && touched.password ? (
                <p className="errorMessage">{errors.password}</p>
              ) : null}
              <button className="app-sign__form__submit" type="submit">
                Sign In
              </button>
            </Form>
          )}
        </Formik>
        <div className="app-sign__form__reg">
          <span>Don't have an account?</span>{" "}
          <button onClick={changePage}>Register now!</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
