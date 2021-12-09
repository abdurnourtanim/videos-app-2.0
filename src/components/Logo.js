import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/image/logo.svg";
import classes from "../style/Nav.module.css";

const Logo = ({ toggle, hide, show }) => {
  return (
    <>
      <div className={`d-flex ${toggle}`}>
        <Link
          to="/"
          className={`${classes.brand__logo} ${classes.brand__logo__large} ${hide}`}
        >
          <img src={image} alt="brand__logo" />
          Coding For KiDs
        </Link>
        <Link
          to="/"
          className={`${classes.brand__logo} ${classes.brand__logo__mobile} ${show} `}
        >
          <img src={image} alt="brand__logo" />
          CFK
        </Link>
      </div>
    </>
  );
};

export default Logo;
