import React from "react";
import classes from "../style/Dashboard.module.css";

const StatisticsItem = ({ icon, head, name, bg }) => {
  const bgColor = bg || "bg-primary";
  return (
    <>
      <div
        className={`
            ${classes.statistics__item}
            mt-3 mt-lg-0
            col-lg-3 col-md-6
            mb-2 mb-xl-0`}
      >
        <div className="d-flex flex-row">
          <div className={`${classes.avatar}  ${bgColor} me-2`}>
            <div className={classes.avatar_content}>
              <i className={icon}></i>
            </div>
          </div>
          <div className="my-auto">
            <h4 className="fw-bolder mb-0">{head}</h4>
            <p className="card-text font-small-3 mb-0">{name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsItem;
