import { map, range } from "lodash";
import React, { FC } from "react";
import { Icon } from "src/components/common";
import { AdminApiCard } from "../AdminApiCard";
import styles from "./AdminApi.module.css";

interface IAdminApiProps {
  isListMode?: boolean;
}

export const AdminApi: FC<IAdminApiProps> = ({ isListMode }) => {
  return (
    <>
      {isListMode ? (
        <div className={styles.list}>
          {map(range(12), (item) => (
            <div className={styles.item} key={item}>
              <div className={styles.col}>
                <span className={styles.name}>API Testing</span>
              </div>
              <div className={styles.col}>
                <span className={styles.code}>
                  zaCELgL.0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx
                </span>
              </div>
              <div className={styles.col}>
                <span className={styles.exchange}>
                  <Icon name="Binance" />
                </span>
              </div>
              <div className={styles.col}>
                <Icon name="Action" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.user}>
          {map(range(12), (item) => (
            <div key={item} className={styles.wrapper}>
              <AdminApiCard className={styles.card} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AdminApi;
