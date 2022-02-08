import classNames from "classnames";
import React, { FC, useMemo } from "react";
import { Dropdown, Icon } from "src/components/common";
import styles from "./AdminActionDropdown.module.css";

interface IAdminActionDropdownProps {
  isExchangeTab?: boolean;
}

export const AdminActionDropdown: FC<IAdminActionDropdownProps> = ({
  isExchangeTab,
}) => {
  const renderDropdownContent = useMemo(() => {
    return (
      <div className={styles.dropdown}>
        {isExchangeTab ? (
          <>
            <button type="button" className={styles.dropdownButton}>
              Edit
            </button>
            <button type="button" className={styles.dropdownButton}>
              Reset
            </button>
            <button type="button" className={styles.dropdownButton}>
              Disable
            </button>
          </>
        ) : (
          <button type="button" className={styles.dropdownButton}>
            Manage
          </button>
        )}
        <button
          type="button"
          className={classNames(styles.dropdownButton, styles.remove)}
        >
          Remove
        </button>
      </div>
    );
  }, [isExchangeTab]);
  return (
    <Dropdown dropdownContent={renderDropdownContent}>
      <Icon name="Action" className={styles.action} />
    </Dropdown>
  );
};

export default AdminActionDropdown;
