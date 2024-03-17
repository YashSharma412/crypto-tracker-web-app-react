import React from "react";
import "./style.css";
const Button = ({ text, onClick, outlined ,className, children, id, style }) => {
  return (
    <button 
      id={id} 
      className={`${outlined ? "btn outlined" : "btn"}${className ? ` ${className}` : ""}`} 
      onClick={() => onClick()}
      style={style}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;