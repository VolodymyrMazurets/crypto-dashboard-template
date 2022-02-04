import React, { FC } from "react";
import styles from "./AdminApiCard.module.css";
import cn from "classnames";
import { Icon } from "src/components/common";

interface IAdminApiCardProps {
  className?: string;
}

export const AdminApiCard: FC<IAdminApiCardProps> = ({ className }) => {
  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.head}>
        <Icon name="Binance" className={styles.exchange} />
        <div className={styles.headControls}>
          <Icon name="Action" className={styles.action} />
        </div>
      </div>
      <div className={styles.adress}>
        <span className={styles.title}>Randy Saris</span>
        <span className={styles.code}>
          zaCELgL.0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx
        </span>
      </div>
    </div>
  );
};
