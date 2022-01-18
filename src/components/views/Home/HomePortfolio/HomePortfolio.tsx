import React, { FC } from "react";
import { WidgetBlock, WidgetControls } from "src/components/common";
import styles from "./HomePortfolio.module.css";

export const HomePortfolio: FC = () => {
  return (
    <WidgetBlock
      title="Portfolio"
      renderHeaderControls={<WidgetControls buttonIcon="Scales" />}
      className={styles.portfolio}
    >
      HomePortfolio
    </WidgetBlock>
  );
};

export default HomePortfolio;
