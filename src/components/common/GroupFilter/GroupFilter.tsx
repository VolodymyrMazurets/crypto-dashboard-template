import classNames from "classnames";
import { includes, map } from "lodash";
import React, { FC } from "react";
import styles from "./GroupFilter.module.css";

export interface IGroupItemType {
  value: string;
  name: string;
}

interface IGroupFilterProps {
  data: IGroupItemType[];
  activeValues: string[];
  onItemClick: (value: string) => void;
}

export const GroupFilter: FC<IGroupFilterProps> = ({
  data,
  activeValues,
  onItemClick,
}) => {
  return (
    <div className={styles.filter}>
      {map(data, ({ value, name }) => (
        <button
          key={value}
          onClick={() => onItemClick(value)}
          className={classNames(styles.button, {
            [styles.inactive]: !includes(activeValues, value),
          })}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default GroupFilter;
