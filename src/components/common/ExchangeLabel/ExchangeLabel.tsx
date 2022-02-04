import React, { FC, useMemo } from "react";
import styles from "./ExchangeLabel.module.css";
import cn from "classnames";
import { Icon } from "..";

interface IExchangeLabelProps {
  exhcange: "binance" | "ftx" | "deribit";
  email: string;
  className?: string;
}

export const ExchangeLabel: FC<IExchangeLabelProps> = ({
  exhcange,
  email,
  className,
}) => {
  const returnIconName = useMemo(() => {
    switch (exhcange) {
      case 'binance':
        return 'Binance'
      case 'deribit':
        return 'Deribit'
      default:
        return 'FTX';
    }
  }, [exhcange])
  return (
    <div className={cn(styles.label, className)}>
      <span className={styles.exchange}>
        <Icon name={returnIconName} />
      </span>
      <span className={styles.email}>{email}</span>
    </div>
  );
};

export default ExchangeLabel;
