import React from "react";
import type { ButtonProps } from "../ButtonContainerProps";
import s from "./TextButton.module.css";

const Buttons: React.FC<ButtonProps> = (props) => {
    const {
        path = "#",
        children,
        buttonclass,
        buttonsize,
        buttonparent,
        variant,
        borderRadius,
        width,
        height,
        padding,
        style = {},
    } = props;

    const childrenArray = React.Children.toArray(children);
    const ClassButtonParent = buttonparent ? s[buttonparent] : " ";
    const variantClass = variant ? s[variant] : "";
    const className = `${variantClass} ${buttonclass} ${s.Btn}`.trim();


    function ButtonSize() {
        if (width || height || padding || borderRadius || Object.keys(style).length > 0) {
            // Если вручную передали стили, используем их
            return {
                width,
                height,
                padding,
                borderRadius,
                ...style,
            };
        }

        // Иначе - логика размеров по buttonsize
        if (buttonsize === "small") {
            return {
                width: "100px",
                height: "30px",
            };
        } else if (buttonsize === "large") {
            return {
                width: "150px",
                height: "50px",
            };
        } else {
            return {
                width: "auto",
                height: "40px",
            };
        }
    }

    return (
        <div className={`${s.ButtonParent} ${ClassButtonParent}`}>
            <div>
                <a href={path}>
                    <button style={ButtonSize()} className={className}>
                        {childrenArray[0]}
                    </button>
                </a>
            </div>
            {childrenArray[1]}
        </div>
    );
};

export default Buttons;
