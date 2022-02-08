import classNames from "classnames";
import { map } from "lodash";
import React, { FC } from "react";
import styles from "./FuturesMarketIndex.module.css";

const data = [
  {
    name: "Index Price",
    value: "51,526",
  },
  {
    name: "Mark Price",
    value: "51,551",
  },
  {
    name: "Open Interest",
    value: "52,029 BTC",
  },
  {
    name: "24h Volume",
    value: "51,816 BTC",
  },
  {
    name: "Next Funding Time",
    value: "18:00:00",
  },
  {
    name: "Predicted Funding Rate",
    value: "0.0015%",
  },
];

const lastData = [
  {
    name: "Minimum Order Size",
    value: "0.001 BTC",
  },
  {
    name: "Minimum Size Increment",
    value: "00.0001 BTC",
  },
  {
    name: "Minimum Price Increment",
    value: "1 USD",
  },
];

export const FuturesMarketIndex: FC = () => {
  return (
    <>
      <div className={styles.contract}>
        {map(data, ({ name, value }, idx) => (
          <div key={name} className={styles.item}>
            <span
              className={classNames(styles.name, {
                [styles.primary]: idx === 0 || idx === 5,
              })}
            >
              {name}
            </span>
            <span className={styles.value}>{value}</span>
          </div>
        ))}
      </div>
      <div className={styles.contract}>
        {map(lastData, ({ name, value }) => (
          <div key={name} className={styles.item}>
            <span className={styles.name}>{name}</span>
            <span className={styles.value}>{value}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default FuturesMarketIndex;
