import React, { FC } from "react";
import {
  HomeAccountSummary,
  HomeDaily,
  HomePortfolio,
  HomePositions,
  HomeWatchlist,
} from "src/components";
import { HomeMarginRatio } from "src/components/views/Home/HomeMarginRatio";
import styles from "./Home.module.css";

export const Home: FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.positions}>
        <HomePositions />
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.account}>
          <HomeAccountSummary />
        </div>
        <div className={styles.row}>
          <div className={styles.half}>
            <HomeDaily />
          </div>
          <div className={styles.half}>
            <HomeWatchlist />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.half}>
            <HomePortfolio />
          </div>
          <div className={styles.half}>
            <HomeMarginRatio />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
