import React from "react";

function Card({ photo }) {
  const randomName = (length) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += alphabet.charAt(Math.floor(Math.random() * 23));
    }
    return result.split("").join("").toUpperCase();
  };

  return (
    <div className="header-cards">
      <div className="card-circle">
        <img className="card-img" src={photo} alt="image of tree" />
      </div>
      <p className="card-title">{randomName(4)}</p>
    </div>
  );
}

export default Card;
