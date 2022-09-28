import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userIsLoggedIn } from "../../app/slice/LoginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = () => {
    dispatch(userIsLoggedIn(true));
    navigate("/welcome");
  };
  return (
    <Fragment>
      <div className="login-container">
        <div className="login-wrapper">
          <div className="login-style">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Type Your Email" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Type Your Password" />
            <button onClick={loginHandler}>Login</button>
          </div>
        </div>
      </div>
      If you don't have an accout <Link to="signup">SignUp</Link>
    </Fragment>
  );
};

export default Login;
