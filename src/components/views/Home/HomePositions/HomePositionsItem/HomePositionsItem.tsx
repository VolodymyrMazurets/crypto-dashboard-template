import React, { FC } from "react";
import { Icon } from "src/components/common";
import cn from "classnames";
import styles from "./HomePositionsItem.module.css";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import "./HomePositionsItem.css";

interface IHomePositionsItemProps {
  className?: string;
}

export const HomePositionsItem: FC<IHomePositionsItemProps> = ({
  className,
}) => {
  const dropdownContent = (
    <div className={styles.dropdown}>
      <button className={styles.linkBtn}>Adjust Leverage</button>
      <button className={styles.linkBtn}>TP/SL</button>
      <button className={styles.linkBtn}>Close Position</button>
    </div>
  );

  return (
    <div className={cn(styles.item, className)}>
      <div className={styles.head}>
        <h6 className={styles.title}>LTCUSDT</h6>
        <div className={styles.headWrapper}>
          <Icon name="ExternalLink" className={styles.linkIcon} />
          <Tooltip
            overlayClassName="HomePositionItemDropdown"
            placement="bottomRight"
            overlay={dropdownContent}
            trigger={["click"]}
            overlayStyle={{opacity: 1}}
          >
            <button>
              <Icon name="Action" className={styles.actionIcon} />
            </button>
          </Tooltip>
        </div>
      </div>
      <div className={styles.columns}>
        <div className={styles.column}>
          <span className={styles.columnTitle}>Isolated 3X</span>
        </div>
        <div className={styles.column}>
          <span className={styles.columnTitle}>TP/SL</span>
          <span className={styles.columnValue}>-- / 2.432,5</span>
        </div>
        <div className={styles.column}>
          <span className={styles.columnTitle}>Funding</span>
          <span className={styles.columnValue}>0.7363%</span>
        </div>
        <div className={styles.column}>
          <span className={styles.columnTitle}>Size (LTC)</span>
          <span className={styles.columnValue}>1.127</span>
        </div>
        <div className={styles.column}>
          <span className={styles.columnTitle}>PNL (ROE%)</span>
          <span className={styles.columnValue}>-10.5262 (-10.08%)</span>
        </div>
        <div className={styles.column}>
          <span className={styles.columnTitle}>Margin</span>
          <span className={styles.columnValue}>107.9123</span>
        </div>
        <div className={styles.column}>
          <span className={styles.columnTitle}>Entry Price</span>
          <span className={styles.columnValue}>107.9123</span>
        </div>
        <div className={styles.column}>
          <span className={styles.columnTitle}>Mark Price</span>
          <span className={styles.columnValue}>107.9123</span>
        </div>
        <div className={styles.column}>
          <span className={styles.columnTitle}>Liq. Price</span>
          <span className={styles.columnValue}>107.9123</span>
        </div>
      </div>
    </div>
  );
};

export default HomePositionsItem;
