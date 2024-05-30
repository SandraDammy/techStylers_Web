import React from "react";
import style from "../Style/Button.module.css";

const Button = ({ className, title, btnEventHandler, value }) => {
  
  return (
    <button
      onClick={btnEventHandler}
      className={style[className]}
      value= {value}
    >
      <p>{title}</p>
    </button>
  );
};

export default Button;
