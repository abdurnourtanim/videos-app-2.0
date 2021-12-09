import React from "react";
import { useAuth } from "../Auth";
import classes from "../style/Sidebar.module.css";

const SidebarProfile = ({ image, name, job, tooltip }) => {
  const { logout } = useAuth();

  return (
    <>
      <div className={classes.profile__content}>
        <div className={classes.profile}>
          <div className={classes.profile__details}>
            <img src={image} alt="profile" />
            <div className={classes.name__job}>
              <div className={classes.name}>{name}</div>
              <div className={classes.job}>{job}</div>
            </div>
          </div>

          <i
            className={`fas fa-sign-in-alt ${classes.logout}`}
            style={{ cursor: "pointer" }}
            onClick={logout}
          ></i>
        </div>
      </div>
    </>
  );
};

export default SidebarProfile;
