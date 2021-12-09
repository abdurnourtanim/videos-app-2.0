import React from "react";
import { Link } from "react-router-dom";
import classes from "../style/Form.module.css";

const Form = ({ children, text, switch_text, path, ...rest }) => {
  return (
    <form className="auth-register-form mt-4" {...rest}>
      {children}

      <p className={`text-center mt-2 ${classes.switch__form}`}>
        {text}
        <Link to={path}> {switch_text}</Link>
      </p>
    </form>
  );
};

export default Form;
