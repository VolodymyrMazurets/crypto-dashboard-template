import React, { FC, useState } from "react";
import { PeriodType, WidgetBlock, WidgetControls } from "src/components/common";
import styles from "./HomeDaily.module.css";
import { HomeDailyChart } from "./HomeDailyChart";

export const HomeDaily: FC = () => {
  const [activeFilter, setActiveFilter] = useState<PeriodType>("30 days");

  return (
    <WidgetBlock
      title="Daily PNL"
      renderHeaderControls={
        <WidgetControls
          buttonIcon="Scales"
          withFilters
          onFilterClick={setActiveFilter}
          activeFilter={activeFilter}
        />
      }
      className={styles.homeDaily}
    >
      <HomeDailyChart activePeriod={activeFilter} />
    </WidgetBlock>
  );
};

export default HomeDaily;
