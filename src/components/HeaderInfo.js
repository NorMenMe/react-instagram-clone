import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { FaEllipsisH } from "react-icons/fa";
import { Button } from "react-bootstrap";
import Dropdown from "./Dropdown";

function HeaderInfo() {
  return (
    <section className="wrapper-header-info">
      <div className="topper">
        <h4 className="name">alexandriaocasio</h4>
        <div className="logos">
          <div className="icon">
            <HiCheckCircle />
          </div>
          <Button variant="primary" className="btn-follow">
            Follow
          </Button>
          <Dropdown>test</Dropdown>
          <div className="ellipsis">
            <FaEllipsisH />
          </div>
        </div>
      </div>
      <div className="stats">
        <p className="posts">
          <span>4340</span> posts
        </p>
        <p className="followers">
          <span>3m</span> followers
        </p>
        <p className="following">
          <span>345 </span>following
        </p>
      </div>
      <div className="shop-info">
        <h6 className="shop-info-name">Alexandria Ocasio-Cortez</h6>
        <p>
          Migas cloud bread chartreuse microdosing lo-fi vape DIY. Waistcoat yr
          palo santo, fanny pack farm-to-table enamel pin intelligentsia
          stumptown. Beard listicle humblebrag normcore, glossier woke scenester
          drinking vinegar pop-up kickstarter.
        </p>
      </div>
    </section>
  );
}

export default HeaderInfo;
