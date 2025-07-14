import React from "react";
import type { IconsProps } from "./IconProps";
import s from "./Icons.module.css";
const Inputs: React.FC<IconsProps> = (props) => {
  const {
    type, // Default icon size
    texttype,
    children,
    ParetClassName,
  } = props;

  const childrenArray = React.Children.toArray(children);
  const textType = texttype ? s[texttype] : "";
  const typeClass = type ? s[type] : "";
  const IconClassName = `${typeClass} ${s.iconParent} ${ParetClassName || ""}`.trim();

  return (
    <div className={`${s.wrappe} ${textType}`}>
      <div className={IconClassName}>{childrenArray[0]}</div>
      {childrenArray[1]}
    </div>
  )
};

export default Inputs;
