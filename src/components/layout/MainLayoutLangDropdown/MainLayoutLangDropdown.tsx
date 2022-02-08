import React, { FC } from "react";
import cn from "classnames";
import { Icon } from "src/components/common";
import Tooltip from "rc-tooltip";
import styles from "./MainLayoutLangDropdown.module.css";
import "./MainLayoutLangDropdown.css";
import "rc-tooltip/assets/bootstrap.css";
import { useState } from "react";

export const MainLayoutLangDropdown: FC = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const dropdownContent = <div className={styles.content}>DropdownContent</div>;

  return (
    <>
      <Tooltip
        overlayClassName="MainLayoutLangDropdown"
        placement="bottomRight"
        overlay={dropdownContent}
        trigger={["click"]}
        afterVisibleChange={(v) => setIsDropdownVisible(v)}
        overlayStyle={{ opacity: 1 }}
      >
        <button
          className={cn(styles.dropdown, {
            [styles.active]: isDropdownVisible,
          })}
        >
          <span className={styles.text}>English / USD</span>
          <Icon
            name="ChevroneDown"
            className={cn(styles.chevron, { "rotate-180": isDropdownVisible })}
          />
        </button>
      </Tooltip>
    </>
  );
};

export default MainLayoutLangDropdown;
