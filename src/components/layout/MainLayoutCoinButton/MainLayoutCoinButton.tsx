import React, { FC } from "react";
import cn from "classnames";
import { Icon, IconType } from "src/components/common";
import styles from "./MainLayoutCoinButton.module.css";

interface IMainLayoutCoinButtonProps {
  className?: string;
  isActive?: boolean;
  value?: string;
  icon?: IconType;
  coin?: "BTC" | "ETH";
}

export const MainLayoutCoinButton: FC<IMainLayoutCoinButtonProps> = ({
  className,
  isActive,
  value = "56,273.82",
  icon = "BitcoinFilled",
  coin = "BTC",
}) => {
  return (
    <button
      className={cn(styles.btn, className, { [styles.active]: isActive })}
    >
      <Icon name={icon} />
      <div className={styles.wrapper}>
        <span className={styles.name}>{coin}</span>
        <span className={styles.value}>
          ${value}{" "}
          <Icon
            name={isActive ? "DropdownUp" : "Dropdown"}
            className={styles.chevron}
          />
        </span>
      </div>
    </button>
  );
};

export default MainLayoutCoinButton;
