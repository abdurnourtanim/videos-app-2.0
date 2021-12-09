import React from "react";
import { Link } from "react-router-dom";
import classes from "../style/Dashboard.module.css";

const Madel = ({ user, image }) => {
  return (
    <>
      <div className={classes.congratulations}>
        <div className={classes.content}>
          <h5 className={classes.displayName}>
            <span>Congratulations 🎉</span>
            <span className="text-capitalize">{user.displayName}!</span>
          </h5>
          <p>You have won gold medal</p>
          <Link to="/dashboard">$48.9k</Link>
          <button className="btn mt-3">View Sales</button>
        </div>
        <div className={classes.madel}>
          <img src={image} alt="Madel__image" />
        </div>
      </div>
    </>
  );
};

export default Madel;
