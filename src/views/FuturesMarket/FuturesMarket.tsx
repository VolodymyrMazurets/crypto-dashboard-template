import React, { FC } from "react";
import {
  FuturesMarketChart,
  FuturesMarketIndex,
  FuturesMarketOrderBook,
  FuturesMarketTable,
  FuturesMarketTrades,
  FuturesMarketTrading,
} from "src/components";
import {
  Button,
  Icon,
  WidgetBlock,
  WidgetControls,
} from "src/components/common";
import styles from "./FuturesMarket.module.css";

export const FuturesMarket: FC = () => {
  return (
    <div className={styles.future}>
      <div className={styles.head}>
        <div className={styles.headCol}>
          <Icon name="BitcoinFilled" className={styles.coin} />
          <div className={styles.headerWrapper}>
            <span className={styles.coinName}>BTC-PERP</span>
            <span className={styles.coinDescr}>Bitcoin Perpetual Futures</span>
          </div>
        </div>
        <div className={styles.headCol}>
          <span className={styles.value}>48.723</span>
          <div className={styles.daily}>
            <Icon name="Dropdown" className={styles.arrow} />
            <span className={styles.arrowValue}>5,95</span>
          </div>
        </div>
        <div className={styles.headCol}>
          <div className={styles.headerWrapper}>
            <span className={styles.volume}>24h Volume</span>
            <span className={styles.volumeValue}>$3,823,273,273.72</span>
          </div>
        </div>
        <div className={styles.headCol}>
          <div className={styles.headerWrapper}>
            <span className={styles.volume}>24h Volume</span>
            <span className={styles.volumeValue}>$3,823,273,273.72</span>
          </div>
        </div>
        <div className={styles.headCol}>
          <div className={styles.exchange}>
            <Icon name="Binance" className={styles.binance} />
          </div>
        </div>
        <div className={styles.headCol}>
          <Button type="secondary">Change</Button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.chart}>
          <WidgetBlock
            title="BTC-03DEC21-44000-C"
            renderHeaderControls={<WidgetControls buttonIcon="Scales" />}
          >
            <FuturesMarketChart />
          </WidgetBlock>
        </div>
        <div className={styles.thirdPart}>
          <WidgetBlock>
            <FuturesMarketTrading />
          </WidgetBlock>
        </div>
        <div className={styles.thirdPart}>
          <WidgetBlock
            title="Order Book"
            renderHeaderControls={<WidgetControls isShortMode />}
          >
            <FuturesMarketOrderBook />
          </WidgetBlock>
        </div>
        <div className={styles.thirdPart}>
          <WidgetBlock
            title="Market Trades"
            renderHeaderControls={<WidgetControls isShortMode />}
          >
            <FuturesMarketTrades />
          </WidgetBlock>
        </div>
        <div className={styles.thirdPart}>
          <WidgetBlock renderHeaderControls={<WidgetControls isShortMode />}>
            <FuturesMarketIndex />
          </WidgetBlock>
        </div>
        <div className={styles.full}>
          <WidgetBlock>
            <FuturesMarketTable />
          </WidgetBlock>
        </div>
      </div>
    </div>
  );
};

export default FuturesMarket;
