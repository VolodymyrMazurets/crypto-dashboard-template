import React, { FC } from "react";
import { WidgetBlock, WidgetControls } from "src/components/common";
import { HomeDailyChart } from "../HomeDaily/HomeDailyChart";
import styles from "./HomePortfolio.module.css";

export const HomePortfolio: FC = () => {
  return (
    <WidgetBlock
      title="Portfolio"
      renderHeaderControls={<WidgetControls buttonIcon="Scales" />}
      className={styles.portfolio}
    >
      <HomeDailyChart />
    </WidgetBlock>
  );
};

export default HomePortfolio;
