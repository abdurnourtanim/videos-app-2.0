import React from "react";
import { Link } from "react-router-dom";
import classes from "../style/Home.module.css";

const VideoCard = ({ heading, title, image, page }) => {
  return (
    <div className="col-lg-4 col-md-6 my-3">
      <div className={`card ${classes.card}`}>
        <img
          className="card-img-top img-fluid"
          src={image}
          alt="Card_image_cap"
          height="200"
        />
        <div className={`card-body ${classes.card__body}`}>
          <h5 className="card-title" style={{ fontSize: "1rem" }}>
            {heading}
          </h5>
          <hr />
          <p className="card-text" style={{ minHeight: "50px" }}>
            {title}
          </p>

          <Link
            to={`/course/${page}`}
            className={`btn btn-primary w-100 ${classes.btn}`}
          >
            Watch video
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
