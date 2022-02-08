import React, { FC } from "react";
import styles from "./FuturesMarketChart.module.css";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

export const FuturesMarketChart: FC = () => {
  return (
    <div className={styles.chart}>
      <TradingViewWidget
        symbol={"BTC"}
        theme={Themes.DARK}
        interval="D"
        locale="en"
        timezone="America/New York"
        hideSideToolbar
        autosize
        hide_top_toolbar
      />
    </div>
  );
};

export default FuturesMarketChart;
