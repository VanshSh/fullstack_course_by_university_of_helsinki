import React from "react";
import Part from "./Part";

const Content = (props) => {
  const { courseObj } = props;
  return (
    <div>
      {courseObj.map((item, index) => {
        return (
          <div key={index} >
            <Part item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Content;
