import s from "./HorizontalGroup.module.css"
import React from "react";
import type { GroupProps } from "../GroupProps";
const HorizontalGroup: React.FC<GroupProps> = (props) => {
    const {
        children,
        horizontalgroupclass, // Assuming groupclass is used for
    } = props;
    const groupclassName = horizontalgroupclass ? s[horizontalgroupclass] : "";
    const childrenArray = React.Children.toArray(children);
    return (
        <div className={groupclassName ? `${groupclassName}${s.GroupParent}` : s.GroupParent}>
            {childrenArray}
        </div>
    );
}
export default HorizontalGroup;