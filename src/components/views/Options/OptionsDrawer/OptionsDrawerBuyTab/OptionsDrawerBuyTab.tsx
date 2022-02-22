import React, { FC, useState } from "react";
import { Button, Checkbox, Input } from "src/components/common";
import styles from "./OptionsDrawerBuyTab.module.css";

export const OptionsDrawerBuyTab: FC = () => {
  const [state, setState] = useState({
    first: "56,928",
    second: "1,000",
    third: "10,272",
    fourth: "537,82",
  });
  const [checked, setChecked] = useState(false);
  const [reduce, setReduce] = useState(false);
  const [hidden, setHidden] = useState(false);

  const onChange = (value: string, name: string) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <div className={styles.row}>
        <Input
          sufix="USD"
          label="Price"
          className={styles.input}
          value={state.first}
          onChange={(v) => onChange(v, "first")}
        />
        <Input
          prefix="≈"
          sufix="BTC"
          className={styles.input}
          value={state.second}
          onChange={(v) => onChange(v, "second")}
        />
      </div>
      <div className={styles.row}>
        <Input
          sufix="USD"
          label="Amount"
          className={styles.input}
          value={state.third}
          onChange={(v) => onChange(v, "third")}
        />
        <Input
          prefix="≈"
          sufix="BTC"
          className={styles.input}
          value={state.fourth}
          onChange={(v) => onChange(v, "fourth")}
        />
      </div>
      <div className={styles.row}>
        <Input
          sufix="USD"
          label="Stop Loss"
          className={styles.input}
          value={state.third}
          onChange={(v) => onChange(v, "third")}
        />
        <Input
          prefix="≈"
          label="% Loss"
          sufix="%"
          className={styles.input}
          value={state.fourth}
          onChange={(v) => onChange(v, "fourth")}
        />
      </div>
      <div className={styles.rowLast}>
        <div className={styles.checkboxWrapper}>
          <Checkbox
            value={reduce}
            onChange={(value) => setReduce(value as boolean)}
          />
          <span className={styles.label}>Reduce</span>
        </div>
        <div className={styles.checkboxWrapper}>
          <Checkbox
            value={checked}
            onChange={(value) => setChecked(value as boolean)}
          />
          <span className={styles.label}>Post</span>
        </div>
        <div className={styles.checkboxWrapper}>
          <Checkbox
            value={hidden}
            onChange={(value) => setHidden(value as boolean)}
          />
          <span className={styles.label}>Hidden</span>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button type="danger">Sell</Button>
      </div>
    </>
  );
};

export default OptionsDrawerBuyTab;