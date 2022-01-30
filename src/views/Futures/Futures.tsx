import { map, xor } from "lodash";
import React, { FC, useState } from "react";
import { GroupFilter, Icon, IGroupItemType } from "src/components/common";
import { HomeWatchlistFuturesModal } from "src/components/views/Home/HomeWatchlist/HomeWatchlistFutures/HomeWatchlistFuturesModal";
import styles from "./Futures.module.css";

const filtersData: IGroupItemType[] = [
  {
    value: "1",
    name: "december 2021",
  },
  {
    value: "2",
    name: "june 2021",
  },
  {
    value: "3",
    name: "march 2021",
  },
  {
    value: "4",
    name: "perpetual",
  },
  {
    value: "5",
    name: "index",
  },
];

export const Futures: FC = () => {
  const [activeValues, setActiveValues] = useState(
    map(filtersData, ({ value }) => value)
  );
  return (
    <div className={styles.futures}>
      <div className={styles.head}>
        <button type="button" className={styles.dropdownButton}>
          All Exhcnages <Icon name="ChevroneDown" className={styles.chevrone} />
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.contentHead}>
          <h2 className={styles.title}>Futures</h2>
          <GroupFilter
            className={styles.filters}
            data={filtersData}
            activeValues={activeValues}
            onItemClick={(value) => setActiveValues(xor(activeValues, [value]))}
          />
        </div>
        <HomeWatchlistFuturesModal />
      </div>
    </div>
  );
};

export default Futures;
