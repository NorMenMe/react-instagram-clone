import React, { useState, useContext } from "react";
import PhotosContext from "../context/initilizeContext";

function ToggleButtonTagged({ posts }) {
  // const [color, setColor] = useState(true);
  const { color, setColor } = useContext(PhotosContext);

  // console.log(color);

  return (
    <button
      className="toggle-btn-posts"
      style={{ color: color ? "black" : "grey" }}
      onClick={() => setColor(!color)}
    >
      TAGGED
    </button>
  );
}

export default ToggleButtonTagged;
