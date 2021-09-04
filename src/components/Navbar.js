import React from "react";
import { Link } from "react-router-dom";
import { ImInstagram } from "react-icons/im";
import { Button } from "react-bootstrap";
import logo from "../logos/logo-instagram.svg";

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
          <div>
            <ul>
              <Link to="/navbar/login" className="ml-3">
                <Button>Login</Button>
              </Link>
              <Link to="/navbar/signup" className="ml-3">
                <Button>Signup</Button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
