import { map, range } from "lodash";
import React, { FC } from "react";
import { Icon } from "src/components/common";
import styles from "./HomeWatchlistFutures.module.css";

export const HomeWatchlistFutures: FC = () => {
  return (
    <div className={styles.futures}>
      {map(range(4), (item) => (
        <div key={item} className={styles.item}>
          <div className={styles.itemHead}>
            <div className={styles.headCoin}>
              <Icon name="BitcoinOutline" className={styles.coin} />
              <div className={styles.headWrapper}>
                <span className={styles.coinName}>BTC-PERP</span>
                <span className={styles.coinDescr}>
                  Bitcoin Perpetual Futures
                </span>
              </div>
            </div>
            <div className={styles.exchange}>
              <Icon name="Binance" className={styles.exchangeIcon} />
            </div>
          </div>
          <div className={styles.itemContent}>
              <div className={styles.itemCol}>
                  <span className={styles.itemName}>24h Volume</span>
                  <span className={styles.itemValue}>$3,823,273,273.72</span>
              </div>
              <div className={styles.itemCol}>
                  <span className={styles.itemName}>Price</span>
                  <span className={styles.itemValue}>48,723</span>
              </div>
              <div className={styles.itemCol}>
                  <span className={styles.itemName}>Daily Change</span>
                  <span className={styles.itemValue}><Icon name="Dropdown" className={styles.iconDropdown} />5,95%</span>
              </div>
              <div className={styles.itemCol}>
                  <span className={styles.itemName}>Open Interest</span>
                  <span className={styles.itemValue}>$2,736,273,273.72</span>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeWatchlistFutures;
