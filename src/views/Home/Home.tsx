import React, { FC } from "react";
import {
  HomeAccountSummary,
  HomeAdjustModal,
  HomeDaily,
  HomePortfolio,
  HomePositions,
  HomeWatchlist,
} from "src/components";
import { MainLayoutControls } from "src/components/layout/MainLayoutControls";
import { HomeMarginRatio } from "src/components/views/Home/HomeMarginRatio";
import styles from "./Home.module.css";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { HomeClosePositionModal } from "src/components";
import { useAppSelector } from "src/store";

export const Home: FC = withAuthenticationRequired(() => {
  const { homeWidgets } = useAppSelector(({ ui }) => ui);
  return (
    <>
      <HomeAdjustModal />
      <HomeClosePositionModal />
      <div className={styles.controls}>
        <MainLayoutControls />
      </div>
      <div className={styles.home}>
        {homeWidgets.positions && (
          <div className={styles.positions}>
            <HomePositions />
          </div>
        )}
        <div className={styles.rightBlock}>
          {homeWidgets.accountSummary && (
            <div className={styles.account}>
              <HomeAccountSummary />
            </div>
          )}
          <div className={styles.row}>
            {homeWidgets.dailyPnl && (
              <div className={styles.half}>
                <HomeDaily />
              </div>
            )}
            {homeWidgets.watchlist && (
              <div className={styles.half}>
                <HomeWatchlist />
              </div>
            )}
          </div>
          <div className={styles.row}>
            {homeWidgets.portfolio && (
              <div className={styles.half}>
                <HomePortfolio />
              </div>
            )}
            {homeWidgets.marginRatio && (
              <div className={styles.half}>
                <HomeMarginRatio />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
});

export default Home;
