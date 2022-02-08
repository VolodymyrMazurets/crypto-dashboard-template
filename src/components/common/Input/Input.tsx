import React, { FC } from "react";
import cn from "classnames";
import styles from "./Input.module.css";

interface IInputProps {
  className?: string;
  label?: string;
  isLightMode?: boolean;
}

export const Input: FC<IInputProps> = ({ className, label, isLightMode }) => {
  return (
    <label className={cn(styles.wrapper, className)}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        type="text"
        className={cn(styles.input, { [styles.light]: isLightMode })}
      />
    </label>
  );
};

export default Input;
