import React, { ChangeEventHandler, FC } from "react";
import cn from "classnames";
import styles from "./RadioButton.module.css";
import { Icon, IconType } from "..";

interface IRadioButtonProps {
  className?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  isExchange?: boolean;
  icon?: IconType;
}

export const RadioButton: FC<IRadioButtonProps> = ({
  className,
  name,
  value,
  disabled,
  checked,
  label,
  onChange,
  children,
  isExchange,
  icon = "Binance",
}) => {
  return (
    <label
      className={cn(styles.radio, { [styles.disabled]: disabled }, className)}
    >
      <span className={styles.wrapper}>
        <input
          type="radio"
          disabled={disabled}
          name={name}
          value={value}
          className={styles.input}
          onChange={onChange}
          checked={checked}
        />
        <span className={cn(styles.box, { [styles.disabled]: disabled })} />
      </span>
      {label && !isExchange && (
        <span className={cn(styles.label, { [styles.disabled]: disabled })}>
          {label}
        </span>
      )}
      {label && isExchange && (
        <div className={styles.labelWrapper}>
          <Icon
            name={icon}
            className={cn(styles.icon, { [styles.disabled]: disabled })}
          />
          <span
            className={cn(styles.labelGrey, { [styles.disabled]: disabled })}
          >
            {label}
          </span>
        </div>
      )}
      {children}
    </label>
  );
};

export default RadioButton;
