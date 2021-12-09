import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/image/profile.jpg";
import { useAuth } from "../Auth";
import classes from "../style/Sidebar.module.css";
import Logo from "./Logo";
import SidebarList from "./SidebarList";
import SidebarProfile from "./SidebarProfile";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  // const [hide, setHide] = useState(false);
  const { currentUser } = useAuth();
  const userName = currentUser.displayName;
  let displayName = userName.split(" ").splice(-1);
  const toggler = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1200) {
        setToggle(false);
      } else {
        setToggle(true);
      }
    });
  }, []);

  return (
    <>
      <div
        className={`${classes.sidebar} ${
          toggle ? classes.active : classes.inactive
        }`}
      >
        <div className={classes.logo__content}>
          <div className={classes.logo}>
            <Logo toggle={!toggle && "d-none"} hide="d-none" show="d-block" />
            {/* <div className={classes.logo__name}>CFK</div> */}
          </div>

          <i className="fas fa-bars" id={classes.btn} onClick={toggler}></i>
        </div>

        <ul className={classes.nav__list}>
          <li onClick={() => setToggle(true)}>
            <Link to="/dashboard">
              <i className={`fas fa-search ${classes.search}`}></i>
              <input type="text" placeholder="Search..." />
            </Link>
            <span className={classes.tooltip}>Search</span>
          </li>

          <SidebarList path="/" icon="far fa-home" text="Home" />
          <SidebarList path="/dashboard" icon="far fa-user" text="User" />
          <SidebarList
            path="/dashboard"
            icon="far fa-envelope"
            text="Massage"
          />
          <SidebarList
            path="/dashboard"
            icon="fas fa-chart-pie"
            text="Analytics"
          />
          <SidebarList
            path="/dashboard"
            icon="fas fa-folder-open"
            text="File Manager"
          />
          <SidebarList
            path="/dashboard"
            icon="fas fa-cart-arrow-down"
            text="Order"
          />
          <SidebarList path="/dashboard" icon="far fa-heart" text="Saved" />
          <SidebarList
            path="/dashboard"
            icon="fas fa-user-cog"
            text="Setting"
          />
        </ul>

        <SidebarProfile
          tooltip="Logout"
          name={displayName}
          job="Web Designer"
          image={image}
        />
      </div>
    </>
  );
};

export default Sidebar;
