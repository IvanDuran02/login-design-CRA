import React from "react";
import "../css/Login.css";
import Button from "./Button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login__container">
      <div className="sideimage">
        <div className="logininfo__mobile">
          <Link to="/aboutus">
            <div className="homeimg"></div>
          </Link>
          <h1>Sign into your account.</h1>
          <span>Your email address</span>
          <input
            className="login__input__mobile"
            type="email"
            name="email"
          ></input>
          <Button
            height="4vh"
            width="20vh"
            border="none"
            radius="2rem"
            color="#F08080"
            children="Sign In."
            onClick={() => console.log("clicked!")}
          />
        </div>
      </div>
      <div className="sidelogin">
        <div className="signup__info">
          <h1>Sign Up.</h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
