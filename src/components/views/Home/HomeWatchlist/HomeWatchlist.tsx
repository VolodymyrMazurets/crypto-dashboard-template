import { map, xor } from "lodash";
import React, { FC, useCallback, useState } from "react";
import {
  Tabs,
  WidgetBlock,
  WidgetControls,
  ModalWindow,
  GroupFilter,
  IGroupItemType,
} from "src/components/common";
import { useAppDispatch, useAppSelector } from "src/store";
import { disableHomeWidget, toggleFeaturesModal, toggleOptionModal } from "src/store/slices/ui";
import styles from "./HomeWatchlist.module.css";
import { HomeWatchlistFutures } from "./HomeWatchlistFutures";
import { HomeWatchlistFuturesModal } from "./HomeWatchlistFutures/HomeWatchlistFuturesModal";
import { HomeWatchlistOptions } from "./HomeWatchlistOptions";
import { HomeWatchlistOptionsModal } from "./HomeWatchlistOptions/HomeWatchlistOptionsModal";

const tabsData = ["Futures", "Options"];
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

export const HomeWatchlist: FC = () => {
  const [activeTab, setActiveTab] = useState("Futures");
  const [activeValues, setActiveValues] = useState(
    map(filtersData, ({ value }) => value)
  );
  const dispatch = useAppDispatch();
  const { isOptionModalOpen, isFeaturesModalOpen } = useAppSelector(
    ({ ui }) => ui
  );

  const renderWidgetContent = () => {
    switch (activeTab) {
      case "Futures":
        return <HomeWatchlistFutures />;

      default:
        return <HomeWatchlistOptions />;
    }
  };

  const onAddClick = useCallback(() => {
    activeTab === "Futures"
      ? dispatch(toggleFeaturesModal())
      : dispatch(toggleOptionModal());
  }, [activeTab, dispatch]);

  return (
    <WidgetBlock
      withPadding={false}
      title="Watchlist"
      renderHeaderControls={
        <WidgetControls
          onButtonClick={onAddClick}
          onCloseClick={() => dispatch(disableHomeWidget("watchlist"))}
        />
      }
      className={styles.watchlist}
      headerClassName={styles.header}
    >
      <ModalWindow
        isOpen={isFeaturesModalOpen}
        onClose={() => dispatch(toggleFeaturesModal())}
        title="Features"
        style={{ top: 35, bottom: 35, left: 24, right: 24 }}
        renderHeadContent={
          <GroupFilter
            data={filtersData}
            activeValues={activeValues}
            onItemClick={(value) => setActiveValues(xor(activeValues, [value]))}
          />
        }
      >
        <HomeWatchlistFuturesModal
          onCancel={() => dispatch(toggleFeaturesModal())}
        />
      </ModalWindow>
      <ModalWindow
        isOpen={isOptionModalOpen}
        onClose={() => dispatch(toggleOptionModal())}
        title="Options"
      >
        <HomeWatchlistOptionsModal />
      </ModalWindow>
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
