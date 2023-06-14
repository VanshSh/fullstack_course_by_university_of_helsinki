import React from "react";

const Header = (props) => {
  const courseName = props.course.name;
  return <h1>{courseName}</h1>;
};

export default Header;
