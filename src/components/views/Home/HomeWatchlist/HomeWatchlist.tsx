import React, { FC, useState } from "react";
import { Tabs, WidgetBlock, WidgetControls } from "src/components/common";
import styles from "./HomeWatchlist.module.css";
import { HomeWatchlistFutures } from "./HomeWatchlistFutures";
import { HomeWatchlistOptions } from "./HomeWatchlistOptions";

const tabsData = ["Futures", "Options"];

export const HomeWatchlist: FC = () => {
  const [activeTab, setActiveTab] = useState("Futures");

  const renderWidgetContent = () => {
    switch (activeTab) {
      case "Futures":
        return <HomeWatchlistFutures />;

      default:
        return <HomeWatchlistOptions />;
    }
  };
  return (
    <WidgetBlock
      withPadding={false}
      title="Watchlist"
      renderHeaderControls={<WidgetControls />}
      className={styles.watchlist}
      headerClassName={styles.header}
    >
      <div className={styles.tabWrapper}>
        <Tabs
          activeTab={activeTab}
          onClick={setActiveTab}
          data={tabsData}
          className={styles.tabs}
        />
      </div>
      {renderWidgetContent()}
    </WidgetBlock>
  );
};

export default HomeWatchlist;
