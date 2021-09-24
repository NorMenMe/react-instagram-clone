import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card.js";

const UNSPLASH_API_KEY = "wXUfFtJ9NppCBXFFQjEyPOJWvAEzxtxUA9K5Pe3xVUY";

const API = `https://api.unsplash.com/search/photos?client_id=${UNSPLASH_API_KEY}&query=trees&orientation=landscape`;

function HeaderCards() {
  const [trees, setTrees] = useState([]);

  const getTrees = () => {
    axios(API).then((response) => {
      setTrees(response.data.results);
    });
  };

  useEffect(() => {
    getTrees();
  }, []);

  const mapped = trees.slice(0, 3).map((obj, index) => {
    return <Card photo={obj.urls.regular} key={index} />;
  });

  return <div className="wrapper-header-cards">{mapped}</div>;
}

export default HeaderCards;
