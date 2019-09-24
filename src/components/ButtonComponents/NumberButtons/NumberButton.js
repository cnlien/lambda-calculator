import React from "react";

const NumberButton = (props) => {
  return (
    <button class={ `button` + props.number } name={`button`+props.number}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number}
    </button>
  );
};

export default NumberButton;
