import React, { FC, useMemo, useState } from "react";
import { Icon, Tabs } from "src/components/common";
import { MainLayoutControlsAccountsDropdown } from "src/components/layout/MainLayoutControls/MainLayoutControlsAccountsDropdown";
import styles from "./OptionsDrawer.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { OptionsDrawerOrderBook } from "./OptionsDrawerOrderBook";
import { OptionsDrawerContractDetails } from "./OptionsDrawerContractDetails";
import { OptionsDrawerMarketTab } from "./OptionsDrawerMarketTab";
import { OptionsDrawerLimitTab } from "./OptionsDrawerLimitTab";
import { OptionsDrawerStopTab } from "./OptionsDrawerStopTab";
import { OptionsDrawerBuyTab } from "./OptionsDrawerBuyTab";

export const OptionsDrawer: FC = () => {
  const [activeTab, setActiveTab] = useState("Market");

  const renderTab = useMemo(() => {
    switch (activeTab) {
      case "Limit":
        return <OptionsDrawerLimitTab />;
      case "Stop Loss":
        return <OptionsDrawerStopTab />;
      case "Buy Limit":
        return <OptionsDrawerBuyTab />;
      default:
        return <OptionsDrawerMarketTab />;
    }
  }, [activeTab]);
  return (
    <div className={styles.drawer}>
      <div className={styles.head}>
        <span className={styles.headValue}>BTC</span>
        <span className={styles.headValue}>03DEC21</span>
        <span className={styles.headValue}>44000</span>
        <span className={styles.headValue}>Call</span>
        <div className={styles.exchange}>
          <Icon name="Binance" className={styles.binance} />
        </div>
      </div>
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
        <Accordion
          allowZeroExpanded
          className={styles.accordion}
          allowMultipleExpanded
        >
          <AccordionItem className={styles.accordionItem}>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.item}>
                <Icon name="ChevroneRight" className={styles.icon} />
                <span className={styles.tabName}>Order Book</span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel style={{ padding: 0 }}>
              <OptionsDrawerOrderBook />
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className={styles.accordionItem}>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.item}>
                <Icon name="ChevroneRight" className={styles.icon} />
                <span className={styles.tabName}>Contract Details</span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel style={{ padding: 0 }}>
              <OptionsDrawerContractDetails />
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default OptionsDrawer;
