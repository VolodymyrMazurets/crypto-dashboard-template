import { map } from "lodash";
import React, { FC } from "react";
import styles from "./OptionsDrawerContractDetails.module.css";

const data = [
  {
    name: "Price Source",
    value: "Binance BTC Index",
  },
  {
    name: "Contract Size",
    value: "BTC 1",
  },
  {
    name: "Tick Size",
    value: "0.0005",
  },
  {
    name: "Settlement Currency",
    value: "BTC",
  },
  {
    name: "Expiry Date",
    value: "22 Dec 2021, 08:00:00",
  },
  {
    name: "Min Price",
    value: "0.026",
  },
  {
    name: "Max Price",
    value: "0.0895",
  },
  {
    name: "Delta",
    value: "0.94289",
  },
  {
    name: "Gamma",
    value: "0.00007",
  },
  {
    name: "Vega",
    value: "2.48484",
  },
  {
    name: "Theta",
    value: "-102.96828",
  },
  {
    name: "Rho",
    value: "0.828",
  },
];

export const OptionsDrawerContractDetails: FC = () => {
  return (
    <div className={styles.contract}>
      {map(data, ({ name, value }) => (
        <div key={name} className={styles.item}>
          <span className={styles.name}>{name}</span>
          <span className={styles.value}>{value}</span>
        </div>
      ))}
    </div>
  );
};

export default OptionsDrawerContractDetails;
