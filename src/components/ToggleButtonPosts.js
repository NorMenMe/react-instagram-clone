import React, { useState, useContext } from "react";
import PhotosContext from "../context/initilizeContext";

function ToggleButtonPosts() {
  const { color, setColor } = useContext(PhotosContext);

  // console.log(color);

  // const updateColor = (e) => {
  //   e.preventDefault()

  // }

  return (
    <button
      className="toggle-btn-posts"
      style={{ color: color ? "grey" : "black" }}
      onClick={() => setColor(!color)}
      // onClick={(e) => updateColor(e)}
    >
      POSTS
    </button>
  );
}

export default ToggleButtonPosts;
