import React from "react";
import { Container } from "react-bootstrap";
import headerImg from "../../images/header-img.png";
import "./Header.css";
import { FaceSmileIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="mb-5 mt-4 container">
      <Container className="header d-flex align-items-center justify-content-between">
        <div>
          <img src={headerImg} className="rounded-circle h-50 w-50" alt="" />
        </div>
        <div className="pe-3 text-light fst-italic">
          <h4>Let's Explore our Quiz & Resources!</h4>
          <div className="d-flex align-items-center icon-div">
            <p>Feel free to checkout</p>
            <FaceSmileIcon className="face-icon ms-2 mb-3" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
