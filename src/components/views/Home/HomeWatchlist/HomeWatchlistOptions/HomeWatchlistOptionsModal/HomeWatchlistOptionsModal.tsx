import { map, range } from "lodash";
import React, { FC } from "react";
import cn from "classnames";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import styles from "./HomeWatchlistOptionsModal.module.css";
import { Icon } from "src/components/common";

import "react-accessible-accordion/dist/fancy-example.css";

const headValues = [
  "Size",
  "IV",
  "Bid",
  "Mark",
  "Ask",
  "IV",
  "Size",
  "Open",
  "Delta",
  "Exchange",
  "Position",
  "Strike",
  "Position",
  "Size",
  "IV",
  "Bid",
  "Mark",
  "Ask",
  "IV",
  "Size",
  "Open",
  "Delta",
  "Exchange",
];

export const HomeWatchlistOptionsModal: FC = () => {
  return (
    <div className={styles.options}>
      <div className={styles.head}>
        <div className={styles.headWrapper}>
          {map(headValues, (item, idx) => (
            <div key={item + idx} className={styles.headValue}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <Accordion allowZeroExpanded className={styles.accordion}>
          {map(range(4), (item) => (
            <AccordionItem key={item} className={styles.accordionItem}>
              <AccordionItemHeading>
                <AccordionItemButton className={styles.item}>
                  <Icon name="ChevroneRight" className={styles.icon} />
                  <div className={cn(styles.date, styles.first)}>
                    21 Jan 22 (21d)
                  </div>
                  <div className={cn(styles.date, styles.centered)}>
                    BTC-03DEC21
                  </div>
                  <div className={cn(styles.date, styles.end)}>
                    BTC-31DEC21 ($48,785.49)
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel style={{ padding: 0 }}>
                <div className={styles.panel}>
                  <div className={styles.table}>
                    {map(range(4), (item) => (
                      <div key={item} className={styles.row}>
                        <div className={styles.tableItem}>18.0</div>
                        <div className={styles.tableItem}>64.02%</div>
                        <div className={styles.tableItem}>
                          <span className={cn(styles.value, styles.green)}>
                            0.7363
                          </span>
                          <span className={styles.percents}>$16,263.28</span>
                        </div>
                        <div className={styles.tableItem}>
                          <span className={cn(styles.value)}>0.7363</span>
                          <span className={styles.percents}>103.28%</span>
                        </div>
                        <div className={styles.tableItem}>
                          <span className={cn(styles.value, styles.red)}>
                            0.2363
                          </span>
                          <span className={styles.percents}>103.28%</span>
                        </div>
                        <div className={styles.tableItem}>102.82%</div>
                        <div className={styles.tableItem}>5.7</div>
                        <div className={styles.tableItem}>-</div>
                        <div className={styles.tableItem}>1.00</div>
                        <div className={styles.tableItem}>
                          <div className={styles.exchange}>
                            <Icon name="Binance" className={styles.binance} />
                          </div>
                        </div>
                        <div className={cn(styles.tableItem, styles.greenItem)}>
                          -
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.btc}>
                    {" "}
                    {map(range(4), (item) => (
                      <div key={item} className={styles.btcItem}>
                        35,828.29
                      </div>
                    ))}
                  </div>
                  <div className={styles.table}>
                    {map(range(4), (item) => (
                      <div key={item} className={styles.row}>
                        <div
                          className={cn(
                            styles.tableItemSecond,
                            styles.greenItem
                          )}
                        >
                          -
                        </div>
                        <div className={cn(styles.tableItemSecond)}>-</div>
                        <div className={cn(styles.tableItemSecond)}>-</div>
                        <div className={cn(styles.tableItemSecond)}>
                          <span className={cn(styles.value, styles.green)}>
                            0.7363
                          </span>
                          <span className={styles.percents}>103.28%</span>
                        </div>
                        <div className={cn(styles.tableItemSecond)}>
                          <span className={cn(styles.value)}>0.2363</span>
                          <span className={styles.percents}>103.28%</span>
                        </div>
                        <div className={cn(styles.tableItemSecond)}>
                          <span className={cn(styles.value, styles.red)}>
                            0.2363
                          </span>
                          <span className={styles.percents}>103.28%</span>
                        </div>
                        <div className={cn(styles.tableItemSecond)}>102.82%</div>
                        <div className={cn(styles.tableItemSecond)}>5.7</div>
                        <div className={cn(styles.tableItemSecond)}>-</div>
                        <div className={cn(styles.tableItemSecond)}>1.00</div>
                        <div className={cn(styles.tableItemSecond)}>
                          <div className={styles.exchange}>
                            <Icon name="Binance" className={styles.binance} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default HomeWatchlistOptionsModal;
