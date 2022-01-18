import React, { FC } from "react";
import { WidgetBlock, WidgetControls } from "src/components/common";
import styles from "./HomeDaily.module.css";

export const HomeDaily: FC = () => {
  return (
    <WidgetBlock
      title="Daily PNL"
      renderHeaderControls={<WidgetControls buttonIcon="Scales" />}
      className={styles.homeDaily}
    >
      Daily
    </WidgetBlock>
  );
};

export default HomeDaily;
