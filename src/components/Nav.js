import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Auth";
import classes from "../style/Nav.module.css";
import Logo from "./Logo";

const Nav = () => {
  const { logout, currentUser } = useAuth();

  return (
    <nav className={classes.home__menu}>
      <div className="container">
        <div className={classes.menu__bar}>
          <Logo />

          <ul className={classes.right__side}>
            <li className={classes.language}>
              <i className="fas fa-flag"></i> English
            </li>
            <li className={classes.sun}>
              <i className="fas fa-sun"></i>
            </li>
            <li>
              <i className="fas fa-search"></i>
            </li>

            {currentUser ? (
              <>
                <li className={classes.bagde}>
                  <i className="fas fa-cart-plus">
                    <span className={classes.bagde__span2}>7</span>
                  </i>
                </li>
                <li className={classes.bagde}>
                  <i className="far fa-bell">
                    <span>4</span>
                  </i>
                </li>
                <li className={classes.account}>
                  <Link to="/dashboard">{currentUser.displayName}</Link>
                </li>

                <li className={classes.avater}>
                  <i className="far fa-user-circle"></i>
                  <span className={classes.account__mobile}>
                    <Link to="/dashboard">{currentUser.displayName}</Link>
                  </span>
                </li>
                <li className={classes.logout} onClick={logout}>
                  <Link to="/" className="btn">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className={classes.singup}>
                  <Link to="/signup">signup</Link>
                </li>
                <li className={classes.login}>
                  <Link to="/login">login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
