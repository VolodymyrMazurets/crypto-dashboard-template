import { map } from "lodash";
import React, { FC, useState } from "react";
import Chart from "kaktana-react-lightweight-charts";
import { Dropdown, RadioButton } from "src/components/common";
import styles from "./OptionsDrawerOrderBookCharts.module.css";
import { lineSeries, testDataCandles } from "src/mock";
import classNames from "classnames";

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

const optionsLine = {
  alignLabels: true,
  lineStyle: 1,
  lineWidth: 1,
  crosshairMarkerVisible: true,
  crosshairMarkerRadius: 6,
  lineType: 1,
  layout: {
    backgroundColor: "transparent",
    textColor: "#676678",
  },
  grid: {
    vertLines: {
      color: "#30303E",
    },
    horzLines: {
      color: "#30303E",
    },
  },
  priceScale: {
    borderColor: "transparent",
  },
};

const optionsCandles = {
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

export const OptionsDrawerOrderBookCharts: FC = () => {
  const [isLineMode, setIsLineMode] = useState(false);
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);

  return (
    <div className={styles.chart}>
      <div className={styles.header}>
        <h4 className={styles.title}>BTC-10DEC2021-57000C</h4>
        <div className={styles.wrapper}>
          <Dropdown
            dropdownContent={
              <div className={styles.dropdown}>
                <div className={styles.wrapper}>
                  <RadioButton
                    value="Candles"
                    checked={!isLineMode}
                    onChange={() => setIsLineMode(false)}
                  />
                  <span className={styles.label}>Candles</span>
                </div>
                <div className={styles.wrapper}>
                  <RadioButton
                    value="Line"
                    checked={isLineMode}
                    onChange={() => setIsLineMode(true)}
                  />
                  <span className={styles.label}>Line</span>
                </div>
              </div>
            }
            setIsDropdownVisible={setIsTypeDropdownOpen}
            zIndex={1000000}
          >
            <button
              className={classNames(styles.button, {
                [styles.active]: isTypeDropdownOpen,
              })}
            >
              {isLineMode ? "Line" : "Candles"}
            </button>
          </Dropdown>
        </div>
      </div>
      <div className={styles.stats}>
        {map(numbers, (item) => (
          <span key={item.name + item.value} className={styles.number}>
            <span className={styles.name}>{item.name}</span>
            {item.value}
          </span>
        ))}
      </div>
      {isLineMode ? (
        <Chart
          options={optionsLine}
          lineSeries={lineSeries}
          autoWidth
          height={250}
        />
      ) : (
        <Chart
          options={optionsCandles}
          autoWidth
          candlestickSeries={testDataCandles}
          height={250}
        />
      )}
    </div>
  );
};

export default OptionsDrawerOrderBookCharts;
