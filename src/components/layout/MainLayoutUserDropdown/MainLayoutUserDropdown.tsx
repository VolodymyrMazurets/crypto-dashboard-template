import React, { FC } from "react";
import cn from "classnames";
import { Icon } from "src/components/common";
import Tooltip from "rc-tooltip";
import styles from "./MainLayoutUserDropdown.module.css";
import "./MainLayoutUserDropdown.css";
import "rc-tooltip/assets/bootstrap.css";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const MainLayoutUserDropdown: FC = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const dropdownContent = (
    <div className={styles.content}>
      {isAuthenticated ? (
        <button onClick={() => logout()}>Log Out</button>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </div>
  );

  return (
    <>
      <Tooltip
        overlayClassName="MainLayoutUserDropdown"
        placement="bottomRight"
        overlay={dropdownContent}
        trigger={["click"]}
        afterVisibleChange={(v) => setIsDropdownVisible(v)}
      >
        <button
          className={cn(styles.dropdown, {
            [styles.active]: isDropdownVisible,
          })}
        >
          <span className={styles.text}>
            {isAuthenticated ? user?.name : "Please Login"}
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

export default MainLayoutUserDropdown;
