import type { IconsProps } from "./iconProps";
import s from "./Icons.module.css";
const Inputs: React.FC<IconsProps> = (props) => {
  const {
    type, // Default icon size
    children,
    ParetClassName,
  } = props;

  const typeClass = type ? s[type] : "";
  const IconClassName = `${typeClass} ${s.iconParent} ${
    ParetClassName || ""
  }`.trim();
  return <div className={IconClassName}>{children}</div>;
};

export default Inputs;
