import React from "react";
import "../css/AboutUs.css";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="container">
      <div className="aboutus__container">
        <Link className="link" to="/login">
          <h1>Login</h1>
        </Link>
        <h1>About Us</h1>
      </div>
      <span className="txt">
        Welcome to my test site! this is just a website to play with some things
        I learn on my coding adventures. You can find me at @popoispoop on
        twitter and youtube. For inquires you can reach me at
        popoispoop@gmail.com or Popo#7261 on discord.
      </span>
    </div>
  );
}

export default AboutUs;
