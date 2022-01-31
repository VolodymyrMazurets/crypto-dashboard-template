import { map, random, range } from "lodash";
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
import { Icon, IconType } from "src/components/common";

import "react-accessible-accordion/dist/fancy-example.css";

const headValues = [
  "Size",
  "IV (Bid)",
  "Bid",
  "Mark",
  "Ask",
  "IV (Ask)",
  "Size",
  "Open",
  "Delta",
  "Exchange",
  "Position",
  "Strike",
  "Position",
  "Size",
  "IV (Bid)",
  "Bid",
  "Mark",
  "Ask",
  "IV (Ask)",
  "Size",
  "Open",
  "Delta",
  "Exchange",
];

interface IHomeWatchlistOptionsModalProps {
  headBg?: string;
  onClick?: () => void;
}

export const HomeWatchlistOptionsModal: FC<IHomeWatchlistOptionsModalProps> = ({
  headBg = "bg-n10",
  onClick,
}) => {
  const getIcon = () => {
    const randomNumber = random(1, 3);
    if (randomNumber === 1) {
      return "Binance";
    }
    if (randomNumber === 2) {
      return "Deribit";
    }
    if (randomNumber === 3) {
      return "FTX";
    }
  };

  return (
    <div className={styles.options}>
      <div className={cn(styles.head, headBg)}>
        <div className={styles.headWrapper}>
          {map(headValues, (item, idx) => (
            <div key={item + idx} className={cn(styles.headValue, headBg)}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <Accordion
          allowZeroExpanded
          className={styles.accordion}
          allowMultipleExpanded
        >
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
                  <div className={styles.table} onClick={onClick}>
                    {map(range(4), (item, idx) => (
                      <div key={item + idx} className={styles.row}>
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
                            <Icon
                              name={getIcon() as IconType}
                              className={styles.binance}
                            />
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
                  <div className={styles.table} onClick={onClick}>
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
                        <div className={cn(styles.tableItemSecond)}>
                          102.82%
                        </div>
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
