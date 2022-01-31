import React, { FC } from "react";
import cn from "classnames";
import styles from "./Input.module.css";

interface IInputProps {
  className?: string;
  label?: string;
}

export const Input: FC<IInputProps> = ({ className, label }) => {
  return (
    <label className={cn(styles.wrapper, className)}>
      {label && <span className={styles.label}>{label}</span>}
      <input type="text" className={styles.input} />
    </label>
  );
};

export default Input;
