import classNames from "classnames";
import React from "react";
import { SingleValueProps } from "react-select";
import { OptionInterface } from "..";
import { Icon } from "../..";
import styles from "./SelectCustomSingleValue.module.css";

const SelectCustomSingleValue = ({
  data,
}: SingleValueProps<OptionInterface, false>) => {
  const { icon, label } = data;
  return (
    <div className={styles.singleValue}>
      {icon && (
        <Icon
          name={icon}
          className={classNames(styles.icon, { [styles.grey]: label })}
        />
      )}
      {label && <span className={styles.value}>{label}</span>}
    </div>
  );
};

export default SelectCustomSingleValue;
