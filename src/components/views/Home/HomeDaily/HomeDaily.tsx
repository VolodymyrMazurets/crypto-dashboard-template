import React, { FC } from "react";
import { WidgetBlock, WidgetControls } from "src/components/common";
import styles from "./HomeDaily.module.css";
import { HomeDailyChart } from "./HomeDailyChart";

export const HomeDaily: FC = () => {
  return (
    <WidgetBlock
      title="Daily PNL"
      renderHeaderControls={<WidgetControls buttonIcon="Scales" />}
      className={styles.homeDaily}
    >
      <HomeDailyChart />
    </WidgetBlock>
  );
};

export default HomeDaily;
