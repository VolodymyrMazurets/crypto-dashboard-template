import React, { FC, ChangeEventHandler } from "react";
import cn from "classnames";
import styles from "./Switch.module.css";

interface ISwitchProps {
  checked?: boolean;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Switch: FC<ISwitchProps> = ({ checked, className, onChange }) => {
  return (
    <label className={cn(styles.toggle, className)}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={onChange}
      />
      <div className={styles.box} />
    </label>
  );
};

export default Switch;
