import React, { FC, useMemo, useState } from "react";
import { Dropdown, Icon } from "src/components/common";
import cn from "classnames";
import styles from "./HomePositionsItem.module.css";
import { useAppDispatch } from "src/store";
import {
  toggleAdjustModal,
  toggleClosePositionModal,
} from "src/store/slices/ui";
import { random } from "lodash";
import { HomePositionsItemChart } from "./HomePositionsItemChart";

interface IHomePositionsItemProps {
  className?: string;
}

export const HomePositionsItem: FC<IHomePositionsItemProps> = ({
  className,
}) => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);

  const dropdownContent = (
    <div className={styles.dropdown}>
      <button
        className={styles.linkBtn}
        onClick={() => dispatch(toggleAdjustModal())}
      >
        Adjust Leverage
      </button>
      <button className={styles.linkBtn}>TP/SL</button>
      <button
        className={styles.linkBtn}
        onClick={() => dispatch(toggleClosePositionModal())}
      >
        Close Position
      </button>
    </div>
  );

  const randomName = useMemo(() => random(5000, 5700), []);

  return (
    <div className={cn(styles.item, className)}>
      <div className={styles.head}>
        <Dropdown
          dropdownContent={
            <HomePositionsItemChart onClose={() => setVisible(false)} />
          }
          placement="right"
          width={636}
          visible={visible}
        >
          <span
            onClick={() => {
              setVisible(!visible);
            }}
            className={cn(styles.title, { [styles.active]: visible })}
          >{`BTC-10DEC2021-${randomName}C.0`}</span>
        </Dropdown>
        <div className={styles.headWrapper}>
          <Icon name="ExternalLink" className={styles.linkIcon} />
          <Dropdown
            dropdownContent={dropdownContent}
            placement="bottomRight"
            width={204}
          >
            <Icon name="Action" className={styles.actionIcon} />
          </Dropdown>
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
