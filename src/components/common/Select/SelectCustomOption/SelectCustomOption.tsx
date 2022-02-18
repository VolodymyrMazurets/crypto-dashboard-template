import React, { RefCallback } from "react";
import styles from "./SelectCustomOption.module.css";
import { OptionInterface } from "..";
import { Icon } from "../..";
import classNames from "classnames";

export const SelectCustomOption = ({
  innerProps,
  innerRef,
  data,
}: {
  innerProps: JSX.IntrinsicElements["div"];
  innerRef: RefCallback<HTMLDivElement>;
  data: OptionInterface;
}) => {
  const { icon, label } = data;
  return (
    <div {...innerProps} ref={innerRef} className={styles.option}>
      {icon && (
        <Icon name={icon} className={classNames({ [styles.icon]: label })} />
      )}
      {label && <span className={styles.value}>{label}</span>}
    </div>
  );
};

export default SelectCustomOption;
