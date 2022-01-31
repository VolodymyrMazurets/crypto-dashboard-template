import { random } from "lodash";
import React, { FC, useMemo } from "react";
import { Icon, LineChartTemplate, PeriodType } from "src/components/common";
import styles from "./HomeDailyChart.module.css";

interface IHomeDailyChartProps {
  activePeriod?: PeriodType;
}

export const HomeDailyChart: FC<IHomeDailyChartProps> = ({ activePeriod }) => {
  const data: { [key: string]: number | string }[] = useMemo(() => {
    return [
      {
        date: "1",
        value: random(-1, 2),
      },
      {
        date: "3",
        value: random(-1, 2),
      },
      {
        date: "5",
        value: random(-1, 2),
      },
      {
        date: "10",
        value: random(-1, 2),
      },
      {
        date: "15",
        value: random(-1, 2),
      },
      {
        date: "20",
        value: random(-1, 2),
      },
      {
        date: "25",
        value: random(-1, 2),
      },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePeriod]);
  return (
    <div className={styles.chart}>
      <div className={styles.head}>
        <span className={styles.value}>$ 16,928.56</span>
        <span className={styles.percents}>
          <Icon name="Dropdown" className={styles.icon} />
          1.35%
        </span>
      </div>
      <div className={styles.chartWrapper}>
        <LineChartTemplate data={data} />
      </div>
    </div>
  );
};

export default HomeDailyChart;
