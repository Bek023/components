import type React from "react";

export type ButtonProps = {
  type: "TButton" | "IButton" | string;
  path?: string;
  children?: React.ReactNode | string;
  buttonparent?: string;
  buttonclass?: string;
  buttonsize?: "small" | "medium" | "large" | string | object;
  variant?:
    | "primarybtn"
    | "secondarybtn"
    | "successbtn"
    | "dangerbtn"
    | "warningbtn"
    | "infobtn"
    | "lightbtn"
    | string;
  borderRadius?: string;
  width?: string;
  height?: string;
  padding?: string;
  gap?: string;
  style?: React.CSSProperties;
};
