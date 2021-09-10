import React, { useContext } from "react";
import database from "../database.json";
import HeaderInfo from "./HeaderInfo";
import PhotosContext from "../context/initilizeContext";
import Card from "./Card";

function Header() {
  const { photos } = useContext(PhotosContext);

  const randomName = (length) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += alphabet.charAt(Math.floor(Math.random() * 23));
    }
    return result.split("").join("").toUpperCase();
  };

  const mapped = photos.slice(0, 3).map((user) => {
    return (
      <>
        <Card photos={user.urls.regular} randomName={randomName} />
      </>
    );
  });

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
        <div className="wrapper-header-info">
          <HeaderInfo />
        </div>
      </div>
      <div className="wrapper-header-cards">{mapped}</div>
    </div>
  );
}

export default Header;
