import React from "react";
import "./style.css";
const Button = ({ text, onClick, outlined ,className, children, id }) => {
  return (
    <button 
      id={id} 
      className={`${outlined ? "btn outlined" : "btn"}${className ? ` ${className}` : ""}`} 
      onClick={() => onClick()}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;