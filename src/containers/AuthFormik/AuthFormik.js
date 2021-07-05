import React, { useState } from "react";

import LoginFormik from "./LoginFormik/LoginFormik";
import SignupFormik from "./SignupFormik/SignupFormik";

import "./AuthFormik.scss";

export const AuthFormik = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleView = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="app-auth">
      <div className="app-auth-form">
        {isSignIn ? (
          <LoginFormik changePage={toggleView} />
        ) : (
          <SignupFormik changePage={toggleView} />
        )}
      </div>
    </div>
  );
};

export default AuthFormik;
