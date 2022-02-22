import classNames from "classnames";
import React, { FC, useMemo, useState } from "react";
import { Button, Checkbox, Dropdown, Icon, Input } from "src/components/common";
import styles from "./OptionsDrawerLimitTab.module.css";

export const OptionsDrawerLimitTab: FC<{ isLightMode?: boolean }> = ({
  isLightMode,
}) => {
  const [state, setState] = useState({
    first: "56,928",
    second: "1,000",
    third: "10,272",
    fourth: "537,82",
  });
  const [checked, setChecked] = useState(false);
  const [reduce, setReduce] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const onChange = (value: string, name: string) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const renderDropdown = useMemo(() => {
    return <div>dropdown</div>;
  }, []);
  return (
    <>
      <div className={styles.row}>
        <Input
          sufix="USD"
          label="Limit Price"
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
          isLightMode={isLightMode}
          onChange={(v) => onChange(v, "third")}
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
      <div className={styles.rowLast}>
        <div className={styles.checkboxWrapper}>
          <Checkbox
            value={checked}
            onChange={(value) => setChecked(value as boolean)}
          />
          <span className={styles.label}>Reduce</span>
        </div>
      </div>
      <div className={styles.rowLast}>
        <Dropdown
          dropdownContent={renderDropdown}
          setIsDropdownVisible={setIsDropdownVisible}
          zIndex={10000}
        >
          <button
            className={classNames(styles.dropdown, {
              [styles.light]: isLightMode,
            })}
          >
            <div className={styles.dropdownWrapper}>
              <span className={styles.text}>GTC</span>
              <Icon name="Info" className={styles.info} />
            </div>
            <Icon
              name="ChevroneDown"
              className={classNames(styles.chevron, {
                "rotate-180": isDropdownVisible,
              })}
            />
          </button>
        </Dropdown>
        <div className={styles.checkboxWrapper}>
          <Checkbox
            value={reduce}
            onChange={(value) => setReduce(value as boolean)}
          />
          <span className={styles.label}>Reduce</span>
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

export default OptionsDrawerLimitTab;
