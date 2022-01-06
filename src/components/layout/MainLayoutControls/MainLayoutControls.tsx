import React, { FC } from "react";
import cn from "classnames";
import { Icon } from "src/components/common";
import styles from "./MainLayoutControls.module.css";
import { MainLayoutControlsSettingsDropdown } from "./MainLayoutControlsSettingsDropdown";
import { MainLayoutControlsAccountsDropdown } from "./MainLayoutControlsAccountsDropdown";

export const MainLayoutControls: FC = () => {
  return (
    <div className={styles.controls}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <Icon name="ArrowUp45" className={styles.icon} />
          </div>
          <div className={styles.column}>
            <span className={styles.name}>Your Balance</span>
            <span className={styles.value}>
              $ 16,928.56
              <span className={styles.percents}>
                <Icon name="DropdownUp" className={styles.chevron} />
                4.60%
              </span>
            </span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <Icon name="Wallet" className={styles.icon} />
          </div>
          <div className={styles.column}>
            <span className={styles.name}>Cash Balance</span>
            <span className={styles.value}>$ 16,928.56</span>
          </div>
        </div>
      </div>
      <div className={cn(styles.wrapper, styles.last)}>
        <MainLayoutControlsSettingsDropdown />
        <MainLayoutControlsAccountsDropdown />
      </div>
    </div>
  );
};
