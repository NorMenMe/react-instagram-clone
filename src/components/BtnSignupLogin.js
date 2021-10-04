import React from "react";

function BtnSignupLogin({ link, value }) {
  return (
    <button>
      <a href={link}>{value}</a>
    </button>
  );
}

export default BtnSignupLogin;
