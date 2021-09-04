import React, { useContext } from "react";
import PhotosContext from "../context/initilizeContext";
import { Card } from "react-bootstrap";

function Posts() {
  const { photos } = useContext(PhotosContext);
  console.log(photos);

  const mapped = photos.slice(0, 9).map((item) => {
    return <Card.Img className="card" variant="top" src={item.urls.regular} />;
  });

  return <div className="wrapper-posts">{mapped}</div>;
}

export default Posts;
