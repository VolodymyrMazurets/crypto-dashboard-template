import { map } from "lodash";
import React, { FC } from "react";
import styles from "./Tabs.module.css";
import cn from "classnames";

export type ITabsData = string[];

interface ITabsProps {
  data: ITabsData;
  activeTab: string;
  onClick: (name: string) => void;
  className?: string;
  isDark?: boolean;
}

export const Tabs: FC<ITabsProps> = ({
  data,
  activeTab,
  onClick,
  className,
  isDark,
}) => {
  return (
    <div className={cn(styles.tabs, className, isDark ? "bg-n10" : "bg-n9")}>
      {map(data, (name) => {
        return (
          <button
            key={name}
            type="button"
            onClick={() => onClick(name)}
            className={cn(styles.button, {
              [styles.active]: activeTab === name,
            })}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
