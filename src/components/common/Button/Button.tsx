import React, { forwardRef, MouseEventHandler, ReactNode } from "react";
import cn from "classnames";
import styles from "./Button.module.css";
import { Icon, IconType } from "..";

interface IButtonProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  disabled?: boolean;
  isBig?: boolean;
  isIconDark?: boolean;
  type?: "primary" | "secondary" | "icon" | "success" | "danger";
  icon?: IconType;
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      className,
      loading,
      disabled,
      isBig,
      type = "primary",
      icon = "Cross",
      onClick,
      isIconDark,
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cn(styles.button, className, styles[type], {
          [styles.loading]: loading,
          [styles.big]: isBig,
          [styles.dark]: isIconDark,
        })}
        disabled={disabled}
      >
        <span className={styles.text}>{children}</span>
        {icon && type === "icon" && (
          <Icon name={icon} className={styles.icon} />
        )}
        {loading && (
          <svg className={styles.loader} focusable="false" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="8" />
          </svg>
        )}
      </button>
    );
  }
);

export default Button;
