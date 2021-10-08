import React from "react";

function BtnTagged({ color, setFunction }) {
  return (
    <>
      <button
        className="btn-tagged btn-bg"
        style={{ color: color ? "black" : "grey" }}
        onClick={() => setFunction()}
      >
        <span>TAGGED</span>
      </button>
    </>
  );
}

export default BtnTagged;
