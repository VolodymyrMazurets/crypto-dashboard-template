import React, { FC } from "react";
import styles from "./AdminExchangeCard.module.css";
import cn from "classnames";
import { Icon, LabelElement, UserLabel } from "src/components/common";
import { AdminActionDropdown } from "../AdminActionDropdown";
import { AdminUsersExchangeDropdown } from "../AdminUsersExchangeDropdown";

interface IAdminExchangeCardProps {
  className?: string;
}

export const AdminExchangeCard: FC<IAdminExchangeCardProps> = ({
  className,
}) => {
  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.head}>
        <Icon name="Binance" className={styles.exchange} />
        <div className={styles.headControls}>
          <LabelElement type="green">Read-Write</LabelElement>
          <AdminActionDropdown isExchangeTab />
        </div>
      </div>
      <div className={styles.adress}>
        <span className={styles.title}>Randy Saris</span>
        <span className={styles.code}>
          zaCELgL.0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx
        </span>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <span className={styles.name}>Portfolio</span>
          <span className={styles.value}>Main Portfolio</span>
        </div>
        <div className={styles.col}>
          <span className={styles.name}>Subaccount Name</span>
          <span className={styles.value}>defaultaccount</span>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.labels}>
          <UserLabel
            name="Ann Passaquindici"
            email="annpassaquindicia@gmail.com"
          />
          <UserLabel
            name="Ann Passaquindici Arcand"
            email="annpassaquindicia@gmail.com"
          />
          <UserLabel
            name="Ann Passaquindici Arcand"
            email="annpassaquindicia@gmail.com"
          />
        </div>
        <AdminUsersExchangeDropdown />
      </div>
    </div>
  );
};
