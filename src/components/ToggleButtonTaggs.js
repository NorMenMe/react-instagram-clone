import React, { useState, useContext } from "react";
import PhotosContext from "../context/initilizeContext";

function ToggleButtonTaggs({ posts }) {
  // const [color, setColor] = useState(true);
  const { color, setColor } = useContext(PhotosContext);

  console.log(color);

  return (
    <button
      className="toggle-btn-posts"
      style={{ color: color ? "grey" : "black" }}
      onClick={() => setColor(!color)}
    >
      {posts}
    </button>
  );
}

export default ToggleButtonTaggs;
