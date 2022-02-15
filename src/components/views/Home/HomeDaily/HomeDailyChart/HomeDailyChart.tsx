import { random, size } from "lodash";
import React, { FC, useMemo } from "react";
import { Icon, LineChartTemplate, PeriodType } from "src/components/common";
import styles from "./HomeDailyChart.module.css";

interface IHomeDailyChartProps {
  activePeriod?: PeriodType;
  checked?: string[];
}

export const HomeDailyChart: FC<IHomeDailyChartProps> = ({
  activePeriod,
  checked,
}) => {
  const data: { [key: string]: number | string | undefined | false }[] =
    useMemo(() => {
      return [
        {
          date: "1",
          value: random(-1, 2),
          secondValue: size(checked) > 0 ? random(-1, 2) : undefined,
          thirdValue: size(checked) > 1 ? random(-1, 2) : undefined,
          fourthValue: size(checked) > 2 ? random(-1, 2) : undefined,
        },
        {
          date: "3",
          value: random(-1, 2),
          secondValue: size(checked) > 0 ? random(-1, 2) : undefined,
          thirdValue: size(checked) > 1 ? random(-1, 2) : undefined,
          fourthValue: size(checked) > 2 ? random(-1, 2) : undefined,
        },
        {
          date: "5",
          value: random(-1, 2),
          secondValue: size(checked) > 0 ? random(-1, 2) : undefined,
          thirdValue: size(checked) > 1 ? random(-1, 2) : undefined,
          fourthValue: size(checked) > 2 ? random(-1, 2) : undefined,
        },
        {
          date: "10",
          value: random(-1, 2),
          secondValue: size(checked) > 0 ? random(-1, 2) : undefined,
          thirdValue: size(checked) > 1 ? random(-1, 2) : undefined,
          fourthValue: size(checked) > 2 ? random(-1, 2) : undefined,
        },
        {
          date: "15",
          value: random(-1, 2),
          secondValue: size(checked) > 0 ? random(-1, 2) : undefined,
          thirdValue: size(checked) > 1 ? random(-1, 2) : undefined,
          fourthValue: size(checked) > 2 ? random(-1, 2) : undefined,
        },
        {
          date: "20",
          value: random(-1, 2),
          secondValue: size(checked) > 0 ? random(-1, 2) : undefined,
          thirdValue: size(checked) > 1 ? random(-1, 2) : undefined,
          fourthValue: size(checked) > 2 ? random(-1, 2) : undefined,
        },
        {
          date: "25",
          value: random(-1, 2),
          secondValue: size(checked) > 1 && random(-1, 2),
          thirdValue: size(checked) > 2 && random(-1, 2),
          fourthValue: size(checked) > 3 && random(-1, 2),
        },
      ];
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activePeriod, checked]);
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
