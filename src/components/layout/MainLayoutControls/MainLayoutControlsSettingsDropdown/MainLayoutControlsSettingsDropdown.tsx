import React, { FC } from "react";
import { Button } from "src/components/common";
import Tooltip from "rc-tooltip";
import styles from "./MainLayoutControlsSettingsDropdown.module.css";
import "./MainLayoutControlsSettingsDropdown.css";
import "rc-tooltip/assets/bootstrap.css";

export const MainLayoutControlsSettingsDropdown: FC = () => {
  const dropdownContent = <div className={styles.content}>Dropdown</div>;

  return (
    <>
      <Tooltip
        overlayClassName="MainLayoutControlsSettingsDropdown"
        placement="bottomRight"
        overlay={dropdownContent}
        trigger={["click"]}
      >
        <Button type="icon" icon="Settings" />
      </Tooltip>
    </>
  );
};

export default MainLayoutControlsSettingsDropdown;
