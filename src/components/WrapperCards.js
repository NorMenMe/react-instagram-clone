import React, { useState } from "react";
import ToggleCards from "./ToggleCards";
import BtnPosts from "./BtnPosts.js";
import BtnTagged from "./BtnTagged.js";

function WrapperCards() {
  const [color, setColor] = useState("black");
  const [value, setValue] = useState("music");

  const setFunction = () => {
    setColor(!color);
    setValue(value === "music" ? "nature" : "music");
  };

  return (
    <section className="wrapper-btns-cards">
      <div className="container-btns">
        <BtnPosts color={color} setFunction={setFunction} />
        <BtnTagged color={color} setFunction={setFunction} />
      </div>
      <ToggleCards value={value} />
    </section>
  );
}

export default WrapperCards;
