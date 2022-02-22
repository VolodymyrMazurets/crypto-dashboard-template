import { map } from "lodash";
import React, { FC, useState } from "react";
import { Icon, Periods } from "src/components/common";
import styles from "./HomePositionsItemChart.module.css";
import Chart from "kaktana-react-lightweight-charts";
import { testDataCandles } from "src/mock";

const numbers = [
  {
    name: "O",
    value: "0.0005",
  },
  {
    name: "H",
    value: "0.0005",
  },
  {
    name: "L",
    value: "0.0005",
  },
  {
    name: "C",
    value: "0.0005",
  },
  {
    name: "",
    value: "-0.0005",
  },
  {
    name: "",
    value: "(-50.00%)",
  },
];

const options = {
  alignLabels: true,
  timeScale: {
    rightOffset: 12,
    barSpacing: 4,
    fixLeftEdge: true,
    lockVisibleTimeRangeOnResize: true,
    rightBarStaysOnScroll: true,
    borderVisible: false,
    visible: true,
    timeVisible: true,
    secondsVisible: false,
  },
  layout: {
    backgroundColor: "transparent",
    textColor: "#676678",
  },
  grid: {
    vertLines: {
      color: "transparent",
    },
    horzLines: {
      color: "#30303E",
    },
  },
  priceScale: {
    borderColor: "transparent",
  },
};

interface IHomePositionsItemChartProps {
  onClose: () => void;
}
export const HomePositionsItemChart: FC<IHomePositionsItemChartProps> = ({
  onClose,
}) => {
  const [activePeriod, setActivePeriod] = useState("30 days");
  return (
    <div className={styles.chart}>
      <div className={styles.header}>
        <h4 className={styles.title}>BTC-10DEC2021-57000C</h4>
        <div className={styles.wrapper}>
          <Periods
            activePeriod={activePeriod}
            setActivePeriod={setActivePeriod}
          />
          <Icon name="Cross" className={styles.cross} onClick={onClose} />
        </div>
      </div>
      <div className={styles.stats}>
        {map(numbers, (item) => (
          <span key={item.name} className={styles.number}>
            <span className={styles.name}>{item.name}</span>
            {item.value}
          </span>
        ))}
      </div>
      <Chart
        options={options}
        candlestickSeries={testDataCandles}
        autoWidth
        height={250}
      />
    </div>
  );
};

export default HomePositionsItemChart;
