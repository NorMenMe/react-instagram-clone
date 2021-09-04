import React, { useState } from "react";
import PhotosContext from "../context/initilizeContext";

function GlobalState(props) {
  const [photos, setPhotos] = useState([]);

  return (
    <PhotosContext.Provider value={{ photos, setPhotos }}>
      {props.children}
    </PhotosContext.Provider>
  );
}

export default GlobalState;
