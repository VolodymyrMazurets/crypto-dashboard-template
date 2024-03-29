import { map, range } from "lodash";
import React, { FC, useState } from "react";
import { Icon, ITabsData, Tabs } from "src/components/common";
import styles from "./HomePositions.module.css";
import { HomePositionsItem } from "./HomePositionsItem";

const tabsData: ITabsData = ["All", "Futures", "Options"];

export const HomePositions: FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  return (
    <div className={styles.positions}>
      <div className={styles.head}>
        <h4 className={styles.title}>Positions</h4>
        <div className={styles.headWrapper}>
          <Icon name="Resize" className={styles.headIcon} />
          <Icon name="Cross" className={styles.headIcon} />
        </div>
      </div>
      <Tabs
        data={tabsData}
        onClick={(name) => setActiveTab(name)}
        activeTab={activeTab}
      />
      <div className={styles.items}>
        {map(range(4), (item) => (
          <HomePositionsItem key={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePositions;
