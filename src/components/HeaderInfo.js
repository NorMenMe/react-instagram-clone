import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { FaEllipsisH } from "react-icons/fa";
import { Button } from "react-bootstrap";
import Dropdown from "./Dropdown";

function HeaderInfo() {
  const randomPosts = Math.floor(Math.random() * 10).toFixed(3);

  const randomFollowers = Math.floor(Math.random() * 100);

  const randomFollowing = Math.floor(Math.random() * 100);

  return (
    <>
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
        <p className="posts">4340 posts</p>
        <p className="followers">3m followers</p>
        <p className="following">345 following</p>
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
    </>
  );
}

export default HeaderInfo;
