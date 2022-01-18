import React, { FC } from "react";
import { WidgetBlock, WidgetControls } from "src/components/common";
import styles from "./HomeWatchlist.module.css";

export const HomeWatchlist: FC = () => {
  return (
    <WidgetBlock
      title="Watchlist"
      renderHeaderControls={<WidgetControls />}
      className={styles.watchlist}
    >
      Watchlist
    </WidgetBlock>
  );
};

export default HomeWatchlist;
