import classNames from "classnames";
import { map, range } from "lodash";
import React, { FC } from "react";
import { LabelElement, UserLabel } from "src/components/common";
import { AdminActionDropdown } from "../AdminActionDropdown";
import { AdminExchangeCard } from "../AdminExchangeCard";
import { AdminUsersExchangeDropdown } from "../AdminUsersExchangeDropdown";
import styles from "./AdminExchange.module.css";

interface IAdminExchangeProps {
  isListMode?: boolean;
}

export const AdminExchange: FC<IAdminExchangeProps> = ({ isListMode }) => {
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
                <UserLabel name="Ann Passaq" email="hey@gmail.com" />
                <UserLabel name="Ann Passaq" email="hey@gmail.com" />
                <AdminUsersExchangeDropdown />
              </div>
              <div className={styles.col}>
                <AdminActionDropdown isExchangeTab />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.user}>
          {map(range(12), (item) => (
            <div key={item} className={styles.wrapper}>
              <AdminExchangeCard className={styles.card} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AdminExchange;
