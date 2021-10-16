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
    <section className="header-cards">
      <div className="card-circle">
        <img className="card-img" src={photo} alt={""} />
      </div>
      <p className="card-title">{randomName(4)}</p>
    </section>
  );
}

export default Card;
