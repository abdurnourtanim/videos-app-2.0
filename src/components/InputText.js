import React from "react";

const InputText = ({ label, ...rest }) => {
  return (
    <div className="mb-1">
      <label className="form-label">{label}</label>
      <input className="form-control" {...rest} />
    </div>
  );
};

export default InputText;
