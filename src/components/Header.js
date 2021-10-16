import React from "react";
import database from "../database.json";
import HeaderInfo from "./HeaderInfo";
import HeaderCards from "./HeaderCards";

function Header() {
  return (
    <div className="container-wrapper-header">
      <div className="wrapper-header">
        <section className="wrapper-header-img">
          <div className="circle-instagram">
            <div className="circle-white">
              <img className="header-img" src={database[0].image} alt={""} />
            </div>
          </div>
        </section>
        <HeaderInfo />
      </div>
      <HeaderCards />
    </div>
  );
}

export default Header;
