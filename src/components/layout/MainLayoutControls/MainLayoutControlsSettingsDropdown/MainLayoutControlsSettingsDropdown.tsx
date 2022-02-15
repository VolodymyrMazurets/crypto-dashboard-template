import React, { FC, useState } from "react";
import { Button, Switch } from "src/components/common";
import Tooltip from "rc-tooltip";
import styles from "./MainLayoutControlsSettingsDropdown.module.css";
import "./MainLayoutControlsSettingsDropdown.css";
import "rc-tooltip/assets/bootstrap.css";
import { enableHomeWidgets, IHomeWidgets, PayloadWidget } from "src/store/slices/ui";
import { useAppDispatch, useAppSelector } from "src/store";
import { map } from "lodash";

const data: { name: string; value: PayloadWidget }[] = [
  {
    value: "portfolio",
    name: "Portfolio Overview",
  },
  {
    value: "positions",
    name: "Positions",
  },
  {
    value: "dailyPnl",
    name: "Daily PN",
  },
  {
    value: "accountSummary",
    name: "Profits",
  },
  {
    value: "watchlist",
    name: "Watchlist",
  },
  {
    value: "marginRatio",
    name: "Margin Ratio",
  },
];

export const MainLayoutControlsSettingsDropdown: FC = () => {
  const { homeWidgets } = useAppSelector(({ ui }) => ui);
  const [vidgets, setVidgets] = useState<IHomeWidgets>(homeWidgets);
  const dispatch = useAppDispatch();

  const dropdownContent = (
    <div className={styles.content}>
      <h4 className={styles.title}>Layout</h4>
      {map(data, ({ name, value }) => (
        <div key={value} className={styles.row}>
          <span className={styles.label}>{name}</span>
          <Switch
            checked={vidgets[value]}
            onChange={(val) =>
              setVidgets({ ...vidgets, [value]: val.target.checked })
            }
          />
        </div>
      ))}
      <div className={styles.footer}>
        <Button onClick={() => dispatch(enableHomeWidgets(vidgets))}>
          Restore Layout
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <Tooltip
        overlayClassName="MainLayoutControlsSettingsDropdown"
        placement="bottomLeft"
        overlay={dropdownContent}
        trigger={["click"]}
        overlayInnerStyle={{ width: 262 }}
        overlayStyle={{ opacity: 1 }}
      >
        <Button type="icon" icon="Settings" />
      </Tooltip>
    </>
  );
};

export default MainLayoutControlsSettingsDropdown;
