import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToggleCards from "./ToggleCards";

function WrapperCards() {
  const [color, setColor] = useState("black");
  const [value, setValue] = useState("music");

  const setFunction = () => {
    setColor(!color);
    setValue("music");
  };

  console.log(value);

  return (
    <div>
      <Link>
        <button
          className="toggle-btn-posts"
          style={{ color: color ? "grey" : "black" }}
          onClick={() => setFunction()}
        >
          POSTS
        </button>
      </Link>

      <ToggleCards value={value} />
    </div>
  );
}

export default WrapperCards;
