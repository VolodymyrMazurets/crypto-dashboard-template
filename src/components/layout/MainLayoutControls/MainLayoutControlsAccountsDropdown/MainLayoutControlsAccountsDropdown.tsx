import React, { FC } from "react";
import cn from "classnames";
import { Icon, RadioButton } from "src/components/common";
import Tooltip from "rc-tooltip";
import styles from "./MainLayoutControlsAccountsDropdown.module.css";
import "./MainLayoutControlsAccountsDropdown.css";
import "rc-tooltip/assets/bootstrap.css";
import { useState } from "react";

interface IMainLayoutControlsAccountsDropdownProps {
  isLight?: boolean;
  className?: string;
}

export const MainLayoutControlsAccountsDropdown: FC<
  IMainLayoutControlsAccountsDropdownProps
> = ({ isLight, className }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const dropdownContent = (
    <div className={styles.content}>
      <RadioButton
        name="account"
        isExchange
        value="1"
        label="v.mazurets@merge.rocks"
      />
      <RadioButton
        name="account"
        isExchange
        value="2"
        label="v.mazurets@merge.rocks"
      />
      <RadioButton
        name="account"
        isExchange
        disabled
        value="3"
        label="v.mazurets@merge.rocks"
      />
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
        overlayInnerStyle={{ width: 345 }}
      >
        <button
          className={cn(styles.dropdown, className, {
            [styles.light]: isLight,
          })}
        >
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
