import React, { FC } from "react";
import { Icon } from "src/components/common";
import styles from "./HomePositionsItem.module.css";

export const HomePositionsItem: FC = () => {
  return (
    <div className={styles.item}>
      <div className={styles.head}>
        <h6 className={styles.title}>LTCUSDT</h6>
        <div className={styles.headWrapper}>
          <Icon name="ExternalLink" className={styles.linkIcon} />
          <Icon name="Action" className={styles.actionIcon} />
        </div>
      </div>
    </div>
  );
};

export default HomePositionsItem;
