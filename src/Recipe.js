import React from "react";

//passing down title, calories and image as props
const Recipe = ({ title, calories, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
