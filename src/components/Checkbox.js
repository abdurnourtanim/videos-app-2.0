import React from "react";
import classes from "../style/Form.module.css";

const Checkbox = ({ label, labelLink, ...rest }) => {
  return (
    <div className="my-2">
      <div className="form-check">
        <input {...rest} className="form-check-input" type="checkbox" />
        <label className={`${classes.form__agree__label} form-check-label`}>
          {label}
          <a href="/"> {labelLink}</a>
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
