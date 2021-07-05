import React, { useState,  } from 'react';

import Login from './Login/Login';
import Signup from './Signup/Signup';
//import { ValidationSchema } from 'validate/ValidationSchema';

import './Auth.scss';

export const Auth = () => {
    
    const [isSignIn, setIsSignIn] = useState(true);
  
    const toggleView = () => {
      setIsSignIn(!isSignIn);
    };
   
    return (
        <div className="app-auth">
            <div className="app-auth-form">
                
            {isSignIn ? (
          <Login changePage={toggleView} />
        ) : (
          <Signup changePage={toggleView} />
        )}
           
            </div>
        </div>
    )
}

export default Auth;
