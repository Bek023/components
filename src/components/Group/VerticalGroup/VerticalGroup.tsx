import React from "react";
import s from "./VerticalGroup.module.css"
import type { GroupProps } from "../GroupProps";
const VerticalGroup: React.FC<GroupProps> = (props) => {
    const {
        children,
        verticalgroupclass,
    } = props
    const groupclassName = verticalgroupclass ? s[verticalgroupclass] : "";
    const childrenArray = React.Children.toArray(children);
    return (
        <div className={groupclassName ? `${groupclassName}${s.GroupParent}` : s.GroupParent}>
            {childrenArray}
        </div>
    );
}
export default VerticalGroup;