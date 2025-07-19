import s from "./HorizontalGroup.module.css"
import React from "react";
import type { GroupProps } from "../GroupProps";
const HorizontalGroup: React.FC<GroupProps> = (props) => {
    const {
        children,
        horizontalgroupclass, // Assuming groupclass is used for
        gap,
    } = props;
    const groupclassName = horizontalgroupclass ? s[horizontalgroupclass] : "";
    const childrenArray = React.Children.toArray(children);
    return (
        <div className={s.GGParent}>
            <div className={groupclassName ? `${groupclassName}${s.GroupParent}` : s.GroupParent} style={{ gap }}>

                {childrenArray}
            </div>
        </div>
    );
}
export default HorizontalGroup;