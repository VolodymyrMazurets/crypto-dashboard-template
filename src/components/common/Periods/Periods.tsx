import classNames from "classnames";
import { map } from "lodash";
import React, { FC } from "react";
import { PeriodType } from "..";
import styles from "./Periods.module.css";

const periods: PeriodType[] = ["1 day", "1 week", "30 days", "3 month"];

interface IPeriodsProps {
  className?: string;
  activePeriod: string;
  setActivePeriod: (period: PeriodType) => void;
}

export const Periods: FC<IPeriodsProps> = ({
  className,
  activePeriod,
  setActivePeriod,
}) => {
  return (
    <div className={styles.periods}>
      {map(periods, (item) => (
        <button
          key={item}
          className={classNames(styles.button, {
            [styles.active]: activePeriod === item,
          })}
          onClick={() => setActivePeriod(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Periods;
