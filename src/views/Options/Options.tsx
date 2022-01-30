import React, { FC } from "react";
import { OptionsTabsWidget } from "src/components";
import { Button, Icon, WidgetBlock } from "src/components/common";
import { HomeWatchlistOptionsModal } from "src/components/views/Home/HomeWatchlist/HomeWatchlistOptions/HomeWatchlistOptionsModal";
import styles from "./Options.module.css";

export const Options: FC = () => {
  return (
    <div className={styles.optionsScreen}>
      <div className={styles.head}>
        <button type="button" className={styles.dropdownButton}>
          All Exhcnages <Icon name="ChevroneDown" className={styles.chevrone} />
        </button>
        <Button type="icon" icon="Settings" />
      </div>
      <div className={styles.content}>
        <div className={styles.options}>
          <WidgetBlock
            title="Options"
            withPadding={false}
            headerClassName={styles.optionsHead}
          >
            <HomeWatchlistOptionsModal headBg="bg-n11" />
          </WidgetBlock>
        </div>
        <div className={styles.tabsBlock}>
          <OptionsTabsWidget />
        </div>
      </div>
    </div>
  );
};

export default Options;
