import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card.js";
import config from "../config/config.js";

const API = `https://api.unsplash.com/search/photos?client_id=${config.env}&query=trees&orientation=landscape`;

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
