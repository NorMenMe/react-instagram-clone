import React, { useState } from "react";
import PhotosContext from "../context/initilizeContext";

function GlobalState(props) {
  const [photos, setPhotos] = useState([]);
  const [musicPics, setMusicPics] = useState([]);
  const [color, setColor] = useState(true);

  return (
    <PhotosContext.Provider
      value={{ photos, setPhotos, color, setColor, musicPics, setMusicPics }}
    >
      {props.children}
    </PhotosContext.Provider>
  );
}

export default GlobalState;
