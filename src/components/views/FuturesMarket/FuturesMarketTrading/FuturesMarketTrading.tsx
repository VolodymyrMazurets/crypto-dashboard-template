import React, { FC, useState } from "react";
import { Button, Icon, Input, Tabs } from "src/components/common";
import { MainLayoutControlsAccountsDropdown } from "src/components/layout/MainLayoutControls/MainLayoutControlsAccountsDropdown";
import styles from "./FuturesMarketTrading.module.css";

export const FuturesMarketTrading: FC = () => {
  const [activeTab, setActiveTab] = useState("Market");

  return (
    <div className={styles.trading}>
      <Tabs
        data={["Market", "Limit", "Stop Loss", "Buy Limit"]}
        activeTab={activeTab}
        onClick={setActiveTab}
        isDark
        className={styles.tabs}
      />
      <div className={styles.content}>
        <div className={styles.dropdown}>
          <MainLayoutControlsAccountsDropdown isLight />
          <Icon name="Info" className={styles.info} />
        </div>
        <div className={styles.row}>
          <Input isLightMode label="Market Price" className={styles.input} />
          <Input isLightMode className={styles.input} />
        </div>
        <div className={styles.row}>
          <Input isLightMode label="Amount" className={styles.input} />
          <Input isLightMode className={styles.input} />
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
      </div>
    </div>
  );
};

export default FuturesMarketTrading;
