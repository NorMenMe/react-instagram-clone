import React from "react";

function Card({ photos, randomName }) {
  return (
    <div className="wrapper-card">
      <img className="card-image" src={photos} />
      <p className="card-title">{randomName(4)}</p>
    </div>
  );
}

export default Card;
