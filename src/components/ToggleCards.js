import React, { useContext, useEffect, useState } from "react";
import PhotosContext from "../context/initilizeContext";
import { Card } from "react-bootstrap";
import axios from "axios";

function ToggleCards({ value }) {
  const [photosCards, setPhotosCards] = useState([]);

  const UNSPLASH_API_KEY = "wXUfFtJ9NppCBXFFQjEyPOJWvAEzxtxUA9K5Pe3xVUY";

  const API = `https://api.unsplash.com/search/photos?client_id=${UNSPLASH_API_KEY}&query=${value}&orientation=landscape`;

  console.log(value);

  const readData = async () => {
    try {
      axios.get(API).then(function (response) {
        setPhotosCards(response.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    readData();
  }, [value]);

  const mapped = photosCards.slice(0, 9).map((item, index) => {
    return (
      <Card.Img
        className="card"
        variant="top"
        key={index}
        src={item.urls.regular}
      />
    );
  });

  return <div className="wrapper-posts">{mapped}</div>;
}

export default ToggleCards;
