import React, { FC } from "react";
import { Icon, LineChartTemplate } from "src/components/common";
import styles from "./HomeDailyChart.module.css";

const data: { [key: string]: number | string }[] = [
  {
    date: "1",
    value: 1.4,
  },
  {
    date: "3",
    value: 0.5,
  },
  {
    date: "5",
    value: 1,
  },
  {
    date: "10",
    value: -1,
  },
  {
    date: "15",
    value: 0.9,
  },
  {
    date: "20",
    value: -1,
  },
  {
    date: "25",
    value: 0.8,
  },
];

export const HomeDailyChart: FC = () => {
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
