import React from "react";
import { Formik, Form, Field } from "formik";

import { signupSchema } from "validate/signupSchema";
import { registerSubmit } from "api/service";
import logo from "assets/logo.svg";

import "./Signup.scss";

export const Signup = (props) => {
  const changePage = () => {
    props.changePage();
  };

  const initialValues = {
    userName: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <div className="app-signUp">
      <div className="app-signUp__form">
        <div className="app-signUp__form__logo">
          <img src={logo} alt="logo"></img>
          <h4>Register now!</h4>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={signupSchema}
          onSubmit={registerSubmit}
        >
          {({ errors, touched }) => (
            <Form className="form">
              <span className="input_names">Username*</span>
              <Field
                name="userName"
                placeholder="Username"
                className="app-signUp__input"
              />
              {errors.userName && touched.userName ? (
                <p className="errorMessage">{errors.userName}</p>
              ) : null}
              <span className="input_names">Password*</span>
              <Field
                name="password"
                placeholder="Password"
                type="password"
                className="app-signUp__input"
              />
              {errors.password && touched.password ? (
                <p className="errorMessage">{errors.password}</p>
              ) : null}
              <span className="input_names">Confirm password*</span>
              <Field
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                className="app-signUp__input"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <p className="errorMessage">{errors.confirmPassword}</p>
              ) : null}
              <button className="app-signUp__form__submit" type="submit">
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
        <div className="app-signUp__form__reg">
          <span>Do you have an account?</span>{" "}
          <button onClick={changePage}>Sign in!</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
