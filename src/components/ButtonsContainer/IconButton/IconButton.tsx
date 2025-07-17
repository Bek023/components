import type { ButtonProps } from "../ButtonContainerProps";
import s from "./IconButton.module.css";
import React from "react";

const IconButton: React.FC<ButtonProps> = (props) => {
    const {
        path = "#",
        children,
        buttonclass = "",
        buttonparent,
        variant,
        borderRadius,
        width,
        height,
        padding,
        gap,
        style = {},
    } = props;

    const childrenArray = React.Children.toArray(children);

    const ClassButtonParent = buttonparent ? s[buttonparent] : "";

    const variantClass = variant ? s[variant] : "";

    const className = `${variantClass} ${buttonclass} ${s.Btn}`.trim();

    const customStyle: React.CSSProperties = {
        borderRadius,
        width,
        height,
        padding,
        gap,
        ...style,
    };

    return (
        <div className={`${s.ButtonParent} ${ClassButtonParent}`.trim()}>
            <div>
                <a href={path}>
                    <button className={className} >
                        <div className={s.BtnContent} style={customStyle}>
                            {childrenArray[0]}
                            {childrenArray[1] ? childrenArray[1] : ""}
                        </div>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default IconButton;
