import React, { FC, useState } from "react";
import { PeriodType, WidgetBlock, WidgetControls } from "src/components/common";
import { HomeDailyChart } from "../HomeDaily/HomeDailyChart";
import styles from "./HomePortfolio.module.css";

export const HomePortfolio: FC = () => {
  const [activeFilter, setActiveFilter] = useState<PeriodType>("30 days");

  return (
    <WidgetBlock
      title="Portfolio"
      renderHeaderControls={
        <WidgetControls
          buttonIcon="Scales"
          withFilters
          onFilterClick={setActiveFilter}
          activeFilter={activeFilter}
        />
      }
      className={styles.portfolio}
    >
      <HomeDailyChart activePeriod={activeFilter} />
    </WidgetBlock>
  );
};

export default HomePortfolio;
