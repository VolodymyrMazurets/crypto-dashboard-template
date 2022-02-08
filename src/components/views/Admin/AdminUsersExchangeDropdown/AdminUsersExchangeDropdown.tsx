import React, { FC, useMemo } from "react";
import { Dropdown, Icon } from "src/components/common";
import styles from "./AdminUsersExchangeDropdown.module.css";

export const AdminUsersExchangeDropdown: FC = () => {
  const renderDropdownContent = useMemo(() => {
    return (
      <div className={styles.dropdown}>
        <div className={styles.item}>
          <span className={styles.name}>Ann Passaquindici Arcand</span>
          <span className={styles.email}>allisonmadsen@examplle.com</span>
        </div>
        <div className={styles.item}>
          <span className={styles.name}>Ann Passaquindici Arcand</span>

          <span className={styles.email}>allisonmadsen@examplle.com</span>
        </div>
        <div className={styles.item}>
          <span className={styles.name}>Ann Passaquindici Arcand</span>
          <span className={styles.email}>allisonmadsen@examplle.com</span>
        </div>
      </div>
    );
  }, []);
  return (
    <Dropdown
      dropdownContent={renderDropdownContent}
      placement="bottomLeft"
      width={410}
    >
      <button type="button" className={styles.button}>
        <Icon name="Plus" className={styles.plus} />2 accounts
      </button>
    </Dropdown>
  );
};

export default AdminUsersExchangeDropdown;
