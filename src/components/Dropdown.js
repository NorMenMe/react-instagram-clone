import React from "react";

function Dropdown() {
  return (
    <div class="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      ></button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">
          Action
        </a>
        <a className="dropdown-item" href="#">
          Another action
        </a>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
      </div>
    </div>
  );
}

export default Dropdown;
