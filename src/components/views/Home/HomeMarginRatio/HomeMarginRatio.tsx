import React, { FC } from "react";
import { WidgetBlock, WidgetControls } from "src/components/common";
import styles from "./HomeMarginRatio.module.css";

export const HomeMarginRatio: FC = () => {
  return (
    <WidgetBlock
      title="Margin Ratio"
      renderHeaderControls={<WidgetControls buttonIcon="Scales" />}
      className={styles.watchlist}
    >
      HomeMarginRatio
    </WidgetBlock>
  );
};

export default HomeMarginRatio;
