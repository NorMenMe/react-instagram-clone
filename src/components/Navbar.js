import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div>Instagram</div>
        <div>
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <ul>
            <Link to="/navbar/home" className="ml-3">
              Home
            </Link>
            <Link to="/navbar/email" className="ml-3">
              Email
            </Link>
            <Link to="/navbar/browse" className="ml-3">
              Browse
            </Link>
            <Link to="/navbar/like" className="ml-3">
              Like
            </Link>
            <Link to="/navbar/account" className="ml-3">
              Account
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
