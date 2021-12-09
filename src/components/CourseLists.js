import React from "react";
import { Link } from "react-router-dom";

const CourseLists = ({ title, page, id, ...rest }) => {
  return (
    <li className="list-group-item ">
      <Link {...rest} to={`/course/${page}`}>
        ({id}) {title}
      </Link>
    </li>
  );
};

export default CourseLists;
