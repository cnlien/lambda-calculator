import React from "react";
import "Numbers";

const NumberButton = (props) => {
  return
    <button id={props.key}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number}
    <button/>
  );
};

export default NumberButton;
