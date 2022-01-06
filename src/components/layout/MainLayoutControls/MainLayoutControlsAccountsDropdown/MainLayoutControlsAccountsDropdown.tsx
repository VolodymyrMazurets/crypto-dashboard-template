import React, { FC } from "react";
import cn from "classnames";
import { Icon } from "src/components/common";
import Tooltip from "rc-tooltip";
import styles from "./MainLayoutControlsAccountsDropdown.module.css";
import "./MainLayoutControlsAccountsDropdown.css";
import "rc-tooltip/assets/bootstrap.css";
import { useState } from "react";
import { Switch } from "../../../common/Switch";

export const MainLayoutControlsAccountsDropdown: FC = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

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
    </div>
  );

  return (
    <>
      <Tooltip
        overlayClassName="MainLayoutControlsAccountsDropdown"
        placement="bottomRight"
        overlay={dropdownContent}
        trigger={["click"]}
        afterVisibleChange={(v) => setIsDropdownVisible(v)}
        overlayInnerStyle={{ width: 260 }}
      >
        <button className={cn(styles.dropdown)}>
          <span className={styles.text}>
            <Icon name="Binance" className={styles.logo} />
            allisonmadsen@examplle.com
          </span>
          <Icon
            name="ChevroneDown"
            className={cn(styles.chevron, { "rotate-180": isDropdownVisible })}
          />
        </button>
      </Tooltip>
    </>
  );
};

export default MainLayoutControlsAccountsDropdown;
