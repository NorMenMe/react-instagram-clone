import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config/config";

function ToggleCards({ value }) {
  const [photosCards, setPhotosCards] = useState([]);

  const API = `https://api.unsplash.com/search/photos?client_id=${config.env}&query=${value}&orientation=landscape`;

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
    // eslint-disable-next-line
  }, []);

  const mapped = photosCards.slice(0, 9).map((item, index) => {
    return (
      <img src={item.urls.regular} className="cardImage" key={index} alt={""} />
    );
  });

  return <section className="container-cards">{mapped}</section>;
}

export default ToggleCards;
