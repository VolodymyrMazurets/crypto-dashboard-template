import React, { FC, useState } from "react";
import { Button, Checkbox, Input } from "src/components/common";
import styles from "./OptionsDrawerMarketTab.module.css";

export const OptionsDrawerMarketTab: FC<{ isLightMode?: boolean }> = ({
  isLightMode,
}) => {
  const [state, setState] = useState({
    first: "56,928",
    second: "1,000",
    third: "10,272",
    fourth: "537,82",
  });
  const [checked, setChecked] = useState(false);

  const onChange = (value: string, name: string) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <>
      <div className={styles.row}>
        <Input
          sufix="USD"
          label="Market Price"
          className={styles.input}
          value={state.first}
          onChange={(v) => onChange(v, "first")}
          isLightMode={isLightMode}
        />
        <Input
          prefix="≈"
          sufix="BTC"
          className={styles.input}
          value={state.second}
          onChange={(v) => onChange(v, "second")}
          isLightMode={isLightMode}
        />
      </div>
      <div className={styles.row}>
        <Input
          sufix="USD"
          label="Amount"
          className={styles.input}
          value={state.third}
          onChange={(v) => onChange(v, "third")}
          isLightMode={isLightMode}
        />
        <Input
          prefix="≈"
          sufix="BTC"
          className={styles.input}
          value={state.fourth}
          onChange={(v) => onChange(v, "fourth")}
          isLightMode={isLightMode}
        />
      </div>
      <div className={styles.checkbox}>
        <Checkbox
          value={checked}
          onChange={(value) => setChecked(value as boolean)}
          isLightMode={isLightMode}
        />
        <span className={styles.label}>Reduce</span>
      </div>
      <div className={styles.buttons}>
        <Button type="success">Buy</Button>
        <Button type="danger">Sell</Button>
      </div>
      <div className={styles.margin}>
        <div className={styles.marginWrapper}>
          <span className={styles.name}>Buy Margin</span>
          <span className={styles.value}>0.0292</span>
        </div>
        <div className={styles.marginWrapper}>
          <span className={styles.name}>Sell Margin</span>
          <span className={styles.value}>0.1892</span>
        </div>
      </div>
    </>
  );
};

export default OptionsDrawerMarketTab;
