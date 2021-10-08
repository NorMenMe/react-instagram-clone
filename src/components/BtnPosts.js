import React from "react";

function BtnPosts({ color, setFunction }) {
  return (
    <>
      <button
        className="btn-posts btn-bg"
        style={{ color: color ? "grey" : "black" }}
        onClick={() => setFunction()}
      >
        <span>POSTS</span>
      </button>
    </>
  );
}

export default BtnPosts;
