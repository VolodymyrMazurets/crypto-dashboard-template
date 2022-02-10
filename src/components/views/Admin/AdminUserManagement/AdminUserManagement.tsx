import classNames from "classnames";
import { map, range } from "lodash";
import React, { FC } from "react";
import { ExchangeLabel, LabelElement } from "src/components/common";
import { AdminCard } from "..";
import { AdminActionDropdown } from "../AdminActionDropdown";
import { AdminUsersDropdown } from "../AdminUsersDropdown";
import styles from "./AdminUserManagement.module.css";

interface IAdminUserManagementProps {
  isListMode?: boolean;
  onManageClick?: () => void;
}

export const AdminUserManagement: FC<IAdminUserManagementProps> = ({
  isListMode,
  onManageClick,
}) => {
  return (
    <>
      {isListMode ? (
        <div className={styles.list}>
          {map(range(12), (item, idx) => (
            <div className={styles.item} key={item}>
              <div className={styles.col}>
                <div className={styles.wrapperCol}>
                  <span className={styles.name}>Randy Saris</span>
                  <span className={styles.mail}>randysaris@gmail.com</span>
                </div>
              </div>
              <div className={styles.col}>
                <LabelElement type={idx === 0 ? "yellow" : "green"}>
                  {idx === 0 ? "Admin" : "Trader"}
                </LabelElement>
              </div>
              <div className={classNames(styles.col, styles.exchange)}>
                <ExchangeLabel exhcange="binance" email="hey@gmail.com" />
                <ExchangeLabel exhcange="binance" email="hey@gmail.com" />
                <ExchangeLabel exhcange="binance" email="hey@gmail.com" />
                <AdminUsersDropdown />
              </div>
              <div className={styles.col}>
                <AdminActionDropdown />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.user}>
          {map(range(12), (item) => (
            <div className={styles.wrapper} key={item}>
              <AdminCard
                className={styles.card}
                onManageClick={onManageClick}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AdminUserManagement;
