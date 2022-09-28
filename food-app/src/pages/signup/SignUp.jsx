import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Fragment>
      <div className="login-container">
        <div className="login-wrapper">
          <div className="login-style">
            <label htmlFor="text">Full Name</label>
            <input type="text" placeholder="Type Your FullName" />
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Type Your Email" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Type Your Password" />
          </div>
        </div>
      </div>
      If you already have an account <Link to="/">Login</Link>
    </Fragment>
  );
};

export default SignUp;
