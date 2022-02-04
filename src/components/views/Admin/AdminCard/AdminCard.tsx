import React, { FC } from "react";
import styles from "./AdminCard.module.css";
import cn from "classnames";
import { ExchangeLabel, Icon, LabelElement } from "src/components/common";

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
          <Icon name="Action" className={styles.action} />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.labels}>
          <ExchangeLabel
            exhcange="binance"
            email="hey@gmail.com"
          />
          <ExchangeLabel
            exhcange="deribit"
            email="annpassaquindicia@gmail.com"
          />
          <ExchangeLabel exhcange="ftx" email="annpassaquindicia@gmail.com" />
        </div>
        <button type="button" className={styles.button}>
          <Icon name="Plus" className={styles.plus} />2 accounts
        </button>
      </div>
    </div>
  );
};
