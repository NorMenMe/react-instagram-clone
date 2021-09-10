import React, { useState, useContext } from "react";
import PhotosContext from "../context/initilizeContext";

function ToggleButtonPosts({ posts }) {
  // const [color, setColor] = useState(true);
  const { color, setColor } = useContext(PhotosContext);

  console.log(color);

  return (
    <button
      className="toggle-btn-posts"
      style={{ color: color ? "black" : "grey" }}
      onClick={() => setColor(!color)}
    >
      {posts}
    </button>
  );
}

export default ToggleButtonPosts;
