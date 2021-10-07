import React from "react";
import { Link } from "react-router-dom";
import { ImInstagram } from "react-icons/im";
import { Button } from "react-bootstrap";
import logo from "../logos/logo-instagram.svg";
import BtnSignupLogin from "./BtnSignupLogin";

const loginLink = "https://www.instagram.com/accounts/login/?hl=en";

const signupLink = "https://www.instagram.com/accounts/emailsignup/?hl=en";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="wrapper-navbar">
          <div className="wrapper-logo">
            <img src={logo} alt="logo-instagram" className="logo-instagram" />
          </div>
          <div>
            <input type="text" placeholder="&#128269; Search" />
          </div>
          <section className="wrapper-btn-signup-login">
            <BtnSignupLogin link={loginLink} value={"Login"} />
            <BtnSignupLogin link={signupLink} value={"Signup"} />
          </section>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
