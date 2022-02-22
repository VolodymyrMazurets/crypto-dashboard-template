import React, { FC, useMemo, useState } from "react";
import { Icon, Tabs } from "src/components/common";
import { MainLayoutControlsAccountsDropdown } from "src/components/layout/MainLayoutControls/MainLayoutControlsAccountsDropdown";
import { OptionsDrawerBuyTab } from "../../Options/OptionsDrawer/OptionsDrawerBuyTab";
import { OptionsDrawerLimitTab } from "../../Options/OptionsDrawer/OptionsDrawerLimitTab";
import { OptionsDrawerMarketTab } from "../../Options/OptionsDrawer/OptionsDrawerMarketTab";
import { OptionsDrawerStopTab } from "../../Options/OptionsDrawer/OptionsDrawerStopTab";
import styles from "./FuturesMarketTrading.module.css";

export const FuturesMarketTrading: FC = () => {
  const [activeTab, setActiveTab] = useState("Market");

  const renderTab = useMemo(() => {
    switch (activeTab) {
      case "Limit":
        return <OptionsDrawerLimitTab isLightMode />;
      case "Stop Loss":
        return <OptionsDrawerStopTab isLightMode />;
      case "Buy Limit":
        return <OptionsDrawerBuyTab isLightMode />;
      default:
        return <OptionsDrawerMarketTab isLightMode />;
    }
  }, [activeTab]);

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
        {renderTab}
      </div>
    </div>
  );
};

export default FuturesMarketTrading;
