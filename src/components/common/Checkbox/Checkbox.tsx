import classNames from "classnames";
import { isArray, isBoolean, uniqueId } from "lodash";
import React, { ChangeEvent, FC, useMemo } from "react";
import { Icon } from "..";
import styles from "./Checkbox.module.css";

interface ICheckboxProps {
  name?: string;
  disabled?: boolean;
  children?: string;
  className?: string;
  data?: (string | number)[];
  value: string | number | boolean;
  onChange: (value: boolean | ICheckboxProps["data"]) => void;
  stopPropagation?: boolean;
  isLightMode?: boolean;
}

export const Checkbox: FC<ICheckboxProps> = ({
  name,
  onChange,
  data,
  value,
  className,
  disabled,
  stopPropagation,
  isLightMode,
}) => {
  const id = useMemo(() => uniqueId("id-"), []);

  const checked = isArray(data) ? data.some((item) => item === value) : !!value;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (stopPropagation) e.stopPropagation();
    if (!disabled) {
      if (isArray(data) && !isBoolean(value)) {
        const shallowCopy = [...data];
        const idx = shallowCopy.findIndex((item) => item === value);

        if (idx >= 0) {
          shallowCopy.splice(idx, 1);
        } else {
          shallowCopy.push(value);
        }
        onChange(shallowCopy);
      } else {
        const nextChecked = e.target.checked;
        onChange(nextChecked);
      }
    }
  };

  return (
    <label
      htmlFor={id}
      className={classNames(
        styles.checkbox,
        { [styles.disabled]: disabled },
        className
      )}
    >
      <input
        id={id}
        type="checkbox"
        value={isBoolean(value) ? String(value) : value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className={styles.input}
        name={name}
      />
      <span
        className={classNames(styles.area, { [styles.light]: isLightMode })}
      >
        <Icon name="Checkmark" className={styles.check} />
      </span>
    </label>
  );
};

export default Checkbox;
