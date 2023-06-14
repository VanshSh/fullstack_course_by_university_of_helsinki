import React from "react";

const Header = (props) => {
  const courseName = props.course.name;
  return <h2 className="fontWeight700">{courseName}</h2>;
};

export default Header;
