import React from "react";
import style  from "../Style/Button.module.css";

const Title = ({className, title}) => {
  return (
    <div className={style[className]}>
      <p>{title}</p>
    </div>
  );
};

export default Title;
