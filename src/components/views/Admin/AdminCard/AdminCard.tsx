import React, { FC } from "react";
import styles from "./AdminCard.module.css";
import cn from "classnames";
import {
  ExchangeLabel,
  LabelElement,
} from "src/components/common";
import { AdminActionDropdown } from "../AdminActionDropdown";
import { AdminUsersDropdown } from "../AdminUsersDropdown";

interface IAdminCardProps {
  className?: string;
}

export const AdminCard: FC<IAdminCardProps> = ({ className }) => {

  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.head}>
        <div className={styles.headWrapper}>
          <span className={styles.title}>Randy Saris</span>
          <span className={styles.email}>randysaris@gmail.com</span>
        </div>
        <div className={styles.headControls}>
          <LabelElement>Admin</LabelElement>
          <AdminActionDropdown />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.labels}>
          <ExchangeLabel exhcange="binance" email="hey@gmail.com" />
          <ExchangeLabel
            exhcange="deribit"
            email="annpassaquindicia@gmail.com"
          />
          <ExchangeLabel exhcange="ftx" email="annpassaquindicia@gmail.com" />
        </div>
        <AdminUsersDropdown />
      </div>
    </div>
  );
};
