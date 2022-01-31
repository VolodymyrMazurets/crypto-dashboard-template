import React, { FC, useState } from "react";
import { Button, Icon, Input, Tabs } from "src/components/common";
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

export const OptionsDrawer: FC = () => {
  const [activeTab, setActiveTab] = useState("Market");
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
        <div className={styles.row}>
          <Input label="Market Price" className={styles.input} />
          <Input className={styles.input} />
        </div>
        <div className={styles.row}>
          <Input label="Amount" className={styles.input} />
          <Input className={styles.input} />
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
