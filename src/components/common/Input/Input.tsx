import React, { FC } from "react";
import cn from "classnames";
import styles from "./Input.module.css";

interface IInputProps {
  className?: string;
  label?: string;
  subLabel?: string;
  isLightMode?: boolean;
  placeholder?: string;
}

export const Input: FC<IInputProps> = ({
  className,
  label,
  subLabel,
  isLightMode,
  placeholder,
}) => {
  return (
    <label className={cn(styles.wrapper, className)}>
      {label && (
        <span className={styles.label}>
          {label}{" "}
          {subLabel && <span className={styles.sublabel}>{subLabel}</span>}
        </span>
      )}
      <input
        type="text"
        className={cn(styles.input, { [styles.light]: isLightMode })}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
