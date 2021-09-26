import React from "react";

function BtnPosts({ color, setFunction }) {
  return (
    <>
      <button
        className="btn-posts btn-bg"
        style={{ color: color ? "grey" : "black" }}
        onClick={() => setFunction()}
      >
        POSTS
      </button>
    </>
  );
}

export default BtnPosts;
