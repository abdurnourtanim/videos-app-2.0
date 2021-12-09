import React from "react";
import classes from "../style/Form.module.css";

const Button = ({ children, ...rest }) => {
  return (
    <div className="my-3">
      <button
        {...rest}
        className={`${classes.submit__btn} ${classes.btn}
          btn btn-primary
          w-100
          waves-effect waves-float waves-light`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
