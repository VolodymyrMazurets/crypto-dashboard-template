import { map, range } from "lodash";
import React, { FC } from "react";
import { AdminExchangeCard } from "../AdminExchangeCard";
import styles from "./AdminExchange.module.css";

interface IAdminExchangeProps {
  isListMode?: boolean;
}

export const AdminExchange: FC<IAdminExchangeProps> = ({ isListMode }) => {
  return (
    <div className={styles.user}>
      {map(range(12), (item) => (
        <div key={item} className={styles.wrapper}>
          <AdminExchangeCard className={styles.card} />
        </div>
      ))}
    </div>
  );
};

export default AdminExchange;
