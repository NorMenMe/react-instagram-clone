import React from "react";

function BtnSignupLogin({ link, value }) {
  return (
    <button className="btn-signup-login">
      <a href={link}>{value}</a>
    </button>
  );
}

export default BtnSignupLogin;
