import React from "react";
import classes from "../style/LoginIcon.module.css";

const LoginIcon = () => {
  return (
    <div className={classes.loginIcon__container}>
      <div className={`${classes.loginIcon} ${classes.LoginIcon__google}`}>
        <i className="fab fa-google"></i>
      </div>
      <div className={`${classes.loginIcon} ${classes.LoginIcon__facebook}`}>
        <i className="fab fa-facebook"></i>
      </div>
      <div className={`${classes.loginIcon} ${classes.LoginIcon__github}`}>
        <i className="fab fa-github"></i>
      </div>
    </div>
  );
};

export default LoginIcon;
