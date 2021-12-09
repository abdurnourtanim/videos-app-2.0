import React from "react";
import { Link } from "react-router-dom";
import classes from "../style/Sidebar.module.css";

const SidebarList = ({ path, icon, className, text }) => {
  return (
    <>
      <li className="mt-2">
        <Link to={path}>
          <i className={icon}></i>
          <span className={classes.links__name}>{text}</span>
        </Link>
        <span className={classes.tooltip}>{text}</span>
      </li>
    </>
  );
};

export default SidebarList;
