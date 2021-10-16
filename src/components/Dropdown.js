import React from "react";

function Dropdown() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      ></button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="https://google.com">
          Action
        </a>
        <a className="dropdown-item" href="https://google.com">
          Another action
        </a>
        <a className="dropdown-item" href="https://google.com">
          Something else here
        </a>
      </div>
    </div>
  );
}

export default Dropdown;
