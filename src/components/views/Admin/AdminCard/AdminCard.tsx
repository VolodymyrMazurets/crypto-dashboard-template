import React, { FC } from "react";
import styles from "./AdminCard.module.css";
import cn from "classnames";
import { ExchangeLabel, LabelElement } from "src/components/common";
import { AdminActionDropdown } from "../AdminActionDropdown";
import { AdminUsersDropdown } from "../AdminUsersDropdown";

// Return random string from [Admin, Trader]
const getRandomUser = () => {
  const users = ["Admin", "Trader"];
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
};

const getRandomColor = () => {
  const colors = [1, 2];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

interface IAdminCardProps {
  className?: string;
  onManageClick?: () => void;
}

export const AdminCard: FC<IAdminCardProps> = ({
  className,
  onManageClick,
}) => {
  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.head}>
        <div className={styles.headWrapper}>
          <span className={styles.title}>Randy Saris</span>
          <span className={styles.email}>randysaris@gmail.com</span>
        </div>
        <div className={styles.headControls}>
          <LabelElement type={getRandomColor() === 1 ? "green" : "yellow"}>{getRandomUser()}</LabelElement>
          <AdminActionDropdown onManageClick={onManageClick} />
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
