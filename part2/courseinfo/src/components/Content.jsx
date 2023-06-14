import React from "react";
import Part from "./Part";

const Content = ({ course }) => {
  const parts = course.parts;
  return (
    <div>
      {parts.map((part) => {
        return <Part key={part.id} item={part} />;
      })}
    </div>
  );
};

export default Content;
