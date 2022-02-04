import React, { FC } from "react";
import styles from "./LabelElement.module.css";
import cn from "classnames";

interface ILabelProps {
  className?: string;
  type?: "yellow" | "green" | "blue";
}

export const LabelElement: FC<ILabelProps> = ({
  children,
  className,
  type = "yellow",
}) => {
  return (
    <span className={cn(styles.label, className, styles[type])}>
      {children}
    </span>
  );
};

export default LabelElement;
