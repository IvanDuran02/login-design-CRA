import React from "react";
import "../css/Button.css";

const Button = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  className,
}) => {
  return (
    <button
      className="custom__btn"
      onClick={onClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
