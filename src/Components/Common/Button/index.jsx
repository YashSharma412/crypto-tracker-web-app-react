import React from "react";
import "./style.css";
const Button = ({ text, onClick, outlined }) => {
  return (
    <button className={outlined?"btn outlined":"btn"} onClick={() => onClick()}>
      {text}
    </button>
  );
};

export default Button;
