import React from "react";
import Part from "./Part";

const Content = (props) => {
const [part1,part2,part3] = props.course.parts;
return (

    <div>

      <Part item={part1} />
      <Part item={part2} />
      <Part item={part3} />
    </div>
  );
};

export default Content;
