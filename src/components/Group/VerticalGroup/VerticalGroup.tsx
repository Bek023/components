import React from "react";
import s from "./VerticalGroup.module.css";
import type { GroupProps } from "../GroupProps";

const VerticalGroup: React.FC<GroupProps> = (props) => {
    const {
        children,
        verticalgroupclass,
        gap = "1rem", // Значение по умолчанию
    } = props;

    const groupclassName = verticalgroupclass
        ? `${s.GroupParent} ${s[verticalgroupclass] || verticalgroupclass}`
        : s.GroupParent;

    const childrenArray = React.Children.toArray(children);

    return (
        <div className={s.VGParent}>
            <div className={groupclassName} style={{ gap }}>
                {childrenArray}
            </div>
        </div>
    );
};

export default VerticalGroup;
