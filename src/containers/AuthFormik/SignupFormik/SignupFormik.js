import React from "react";
import { Formik, Form, Field } from "formik";

import { signupSchema } from "validate/signupSchema";
import logo from "assets/logo.svg";

import "./SignupFormik.scss";

export const SignupFormik = (props) => {
  const changePage = () => {
    props.changePage();
  };

  return (
    <div className="app-signUp">
      <div className="app-signUp__form">
        <div className="app-signUp__form__btn">
          <img src={logo} alt="logo"></img>
          <h4>Register now!</h4>
        </div>
        <Formik
          initialValues={{
            userName: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={signupSchema}
          onSubmit={(initialValues) => {
            fetch("http://step.bangits.com/api/Auth/Register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(initialValues),
            })
              .then((res) => {
                if (res.status < 400) {
                  alert("Successfully registered !!!");
                  return res.json();
                } else {
                  const err = new Error(
                    "Network Error:Status code 400 and higher"
                  );
                  alert(err);
                }
              })
              .then((resJson) => {
                console.log(resJson);
              });
          }}
        >
          {({ errors, touched }) => (
            <Form className="form">
              <span>Username*</span>
              <Field
                name="userName"
                placeholder="Username"
                className="app-signUp__input"
              />
              {errors.userName && touched.userName ? (
                <p className="errorMessage">{errors.userName}</p>
              ) : null}
              <span>Password*</span>
              <Field
                name="password"
                placeholder="Password"
                type="password"
                className="app-signUp__input"
              />
              {errors.password && touched.password ? (
                <p className="errorMessage">{errors.password}</p>
              ) : null}
              <span>Confirm password*</span>
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

export default SignupFormik;