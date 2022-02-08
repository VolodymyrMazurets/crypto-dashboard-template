import Tooltip from "rc-tooltip";
import React, { FC, ReactElement } from "react";
import styles from "./Dropdown.module.css";

interface IDropdownProps {
  dropdownContent: ReactElement;
  trigger?: string | string[];
  width?: number;
  placement?: string;
}

export const Dropdown: FC<IDropdownProps> = ({
  dropdownContent,
  children,
  trigger = ["click"],
  width = 150,
  placement = "bottomRight",
}) => {
  return (
    <Tooltip
      overlayClassName={styles.dropdown}
      overlayInnerStyle={{
        background: "#252533",
        boxShadow: "0px 4px 32px rgba(14, 15, 19, 0.29)",
        borderRadius: 16,
        padding: 24,
        width,
        position: "relative",
        top: -6,
      }}
      placement={placement}
      overlay={dropdownContent}
      trigger={trigger}
      overlayStyle={{ opacity: 1 }}
    >
      <a href=" ">{children}</a>
    </Tooltip>
  );
};

export default Dropdown;
