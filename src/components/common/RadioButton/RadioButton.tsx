import React, { FC } from "react";
import styles from "./RadioButton.module.css";

interface IRadioButtonProps {
  name?: string;
}

export const RadioButton: FC<IRadioButtonProps> = ({ name }) => {
  return (
    <label className={styles.radio}>
      <input type="radio" name={name} className={styles.input} onChange={(v) => console.log(v)} />
      <span className={styles.box} />
    </label>
  );
};

export default RadioButton;
