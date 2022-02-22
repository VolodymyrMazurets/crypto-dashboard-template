import React, { FC } from "react";
import cn from "classnames";
import styles from "./Input.module.css";

interface IInputProps {
  className?: string;
  label?: string;
  subLabel?: string;
  isLightMode?: boolean;
  placeholder?: string;
  prefix?: string;
  sufix?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input: FC<IInputProps> = ({
  className,
  label,
  subLabel,
  isLightMode,
  placeholder,
  prefix,
  sufix,
  value,
  onChange,
}) => {
  return (
    <label className={cn(styles.wrapper, className)}>
      {label && (
        <span className={styles.label}>
          {label}{" "}
          {subLabel && <span className={styles.sublabel}>{subLabel}</span>}
        </span>
      )}
      <div className={styles.inputWrapper}>
        {prefix && <span className={styles.prefix}>{prefix}</span>}
        {sufix && <span className={styles.sufix}>{sufix}</span>}
        <input
          type="text"
          className={cn(styles.input, {
            [styles.light]: isLightMode,
            [styles.withPrefix]: prefix,
          })}
          placeholder={placeholder}
          value={value}
          onChange={(v) => onChange && onChange(v.target.value)}
        />
      </div>
    </label>
  );
};

export default Input;
