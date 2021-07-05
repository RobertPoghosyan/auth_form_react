import React from "react";
import { Formik, Form, Field } from "formik";

import { loginSchema } from "validate/loginSchema";
import logo from "assets/logo.svg";

import "./LoginFormik.scss";

export const LoginFormik = (props) => {
  const changePage = () => {
    props.changePage();
  };

  return (
    <div className="app-signIn">
      <div className="app-signIn__form">
        <div className="app-signIn__form__logo">
          <img src={logo} alt="logo"></img>
          <h4>Already have an account?</h4>
          <span className="cool">Cool, just login.</span>
        </div>
        <Formik
          initialValues={{
            userName: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(initialValues) => {
            fetch("http://step.bangits.com/api/Auth/Login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(initialValues),
            })
              .then((res) => {
                if (res.status < 400) {
                  alert("Successfully logged in !!!");
                  return res.json();
                } else {
                  const err = new Error("Incorrect username or password");
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
              <span className="input_names">Username</span>
              <Field
                name="userName"
                type="text"
                placeholder="Username"
                className="app-signIn__form__input"
              />
              {errors.userName && touched.userName ? (
                <p className="errorMessage">{errors.userName}</p>
              ) : null}
              <span className="input_names">Password</span>
              <Field
                name="password"
                placeholder="Password"
                type="password"
                className="app-signIn__form__input"
              />
              {errors.password && touched.password ? (
                <p className="errorMessage">{errors.password}</p>
              ) : null}
              <button className="app-signIn__form__submit" type="submit">
                Sign In
              </button>
            </Form>
          )}
        </Formik>
        <div className="app-signIn__form__reg">
          <span>Don't have an account?</span>{" "}
          <button onClick={changePage}>Register now!</button>
        </div>
      </div>
    </div>
  );
};

export default LoginFormik;