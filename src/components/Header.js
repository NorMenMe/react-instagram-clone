import React, { useContext } from "react";
import database from "../database.json";
import HeaderInfo from "./HeaderInfo";
import PhotosContext from "../context/initilizeContext";
import Card from "./Card";
import HeaderCards from "./HeaderCards";

function Header() {
  const { photos } = useContext(PhotosContext);

  return (
    <div className="container-wrapper-header">
      <div className="wrapper-header">
        <div className="wrapper-header-img">
          <div className="circle-instagram">
            <div className="circle-white">
              <img className="header-img" src={database[0].image} />
            </div>
          </div>
        </div>
        <HeaderInfo />
      </div>
      <HeaderCards />
    </div>
  );
}

export default Header;
