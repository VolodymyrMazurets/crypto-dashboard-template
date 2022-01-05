import React, { FC } from "react";
import { Icon } from "src/components/common";
import Tooltip from "rc-tooltip";
import styles from "./MainLayoutLangDropdown.module.css";
import "./MainLayoutLangDropdown.css";
import "rc-tooltip/assets/bootstrap.css";

export const MainLayoutLangDropdown: FC = () => {
  const dropdownContent = <div className={styles.content}>DropdownContent</div>;
  return (
    <>
      <Tooltip
        overlayClassName="MainLayoutLangDropdown"
        placement="bottomRight"
        overlay={dropdownContent}
        trigger={["click"]}
        
      >
        <button className={styles.dropdown}>
          <span className={styles.text}>English / USD</span>
          <Icon name="ChevroneDown" className={styles.chevron} />
        </button>
      </Tooltip>
    </>
  );
};

export default MainLayoutLangDropdown;
