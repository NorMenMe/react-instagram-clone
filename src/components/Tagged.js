import React, { useContext } from "react";
import PhotosContext from "../context/initilizeContext.js";
import { Card } from "react-bootstrap";

function Tagged() {
  const { musicPics } = useContext(PhotosContext);

  const mapped = musicPics.slice(0, 9).map((item) => {
    return <Card.Img className="card" variant="top" src={item.urls.regular} />;
  });

  return <div className="wrapper-tagged">{mapped}</div>;
}

export default Tagged;
