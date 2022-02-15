import Drawer from "rc-drawer";
import React, { FC, useState } from "react";
import { OptionsTabsWidget } from "src/components";
import { Button, Icon, WidgetBlock } from "src/components/common";
import { HomeWatchlistOptionsModal } from "src/components/views/Home/HomeWatchlist/HomeWatchlistOptions/HomeWatchlistOptionsModal";
import { OptionsDrawer } from "src/components/views/Options/OptionsDrawer";
import { OptionsTradesCalls } from "src/components/views/Options/OptionsTradesCalls";
import styles from "./Options.module.css";
import { withAuthenticationRequired } from "@auth0/auth0-react";

export const Options: FC = withAuthenticationRequired(() => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={styles.optionsScreen}>
      <Drawer
        placement="right"
        onClose={toggleSidebar}
        level={null}
        open={isSidebarOpen}
        handler={false}
        width={730}
        maskClosable
        height="100vh"
        contentWrapperStyle={{ background: "#22212D" }}
        style={{ outline: "none" }}
      >
        <OptionsDrawer />
      </Drawer>
      <div className={styles.head}>
        <button type="button" className={styles.dropdownButton}>
          All Exchanges <Icon name="ChevroneDown" className={styles.chevrone} />
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
            <HomeWatchlistOptionsModal
              onClick={toggleSidebar}
              headBg="bg-n11"
            />
          </WidgetBlock>
        </div>
        <div className={styles.tabsBlock}>
          <OptionsTabsWidget />
        </div>
        <div className={styles.half}>
          <WidgetBlock
            title="Options Trades (СALLS)"
            withPadding={false}
            headerClassName={styles.optionsHead}
          >
            <OptionsTradesCalls />
          </WidgetBlock>
        </div>
        <div className={styles.half}>
          <WidgetBlock
            title="Options Trades (СALLS)"
            withPadding={false}
            headerClassName={styles.optionsHead}
          >
            <OptionsTradesCalls />
          </WidgetBlock>
        </div>
      </div>
    </div>
  );
});

export default Options;
