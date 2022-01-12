import React, { FC } from "react";
import { Button, Switch } from "src/components/common";
import Tooltip from "rc-tooltip";
import styles from "./MainLayoutControlsSettingsDropdown.module.css";
import "./MainLayoutControlsSettingsDropdown.css";
import "rc-tooltip/assets/bootstrap.css";

export const MainLayoutControlsSettingsDropdown: FC = () => {
  const dropdownContent = (
    <div className={styles.content}>
      <h4 className={styles.title}>Layout</h4>
      <div className={styles.row}>
        <span className={styles.label}>Portfolio Overview</span>
        <Switch />
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Positions</span>
        <Switch />
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Daily PNL</span>
        <Switch />
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Profits</span>
        <Switch />
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Watchlist</span>
        <Switch />
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Margin Ratio</span>
        <Switch />
      </div>
      <div className={styles.footer}>
        <Button>Restore Layout</Button>
      </div>
    </div>
  );

  return (
    <>
      <Tooltip
        overlayClassName="MainLayoutControlsSettingsDropdown"
        placement="bottomLeft"
        overlay={dropdownContent}
        trigger={["click"]}
        overlayInnerStyle={{ width: 262 }}
      >
        <Button type="icon" icon="Settings" />
      </Tooltip>
    </>
  );
};

export default MainLayoutControlsSettingsDropdown;
