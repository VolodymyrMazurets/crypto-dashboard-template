import React, { forwardRef } from "react";
import cn from "classnames";
import styles from "./Input.module.css";
import { Icon } from "..";

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
  isSearchMode?: boolean;
  onBlur?: () => void;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      className,
      label,
      subLabel,
      isLightMode,
      placeholder,
      prefix,
      sufix,
      value,
      onChange,
      isSearchMode,
      onBlur,
    },
    ref
  ) => {
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
          {isSearchMode && <Icon className={styles.search} name="Search" />}
          <input
            type="text"
            ref={ref}
            className={cn(styles.input, {
              [styles.light]: isLightMode,
              [styles.withPrefix]: prefix,
              [styles.isSearchMode]: isSearchMode,
            })}
            placeholder={placeholder}
            value={value}
            onChange={(v) => onChange && onChange(v.target.value)}
            onBlur={onBlur}
          />
        </div>
      </label>
    );
  }
);

export default Input;
