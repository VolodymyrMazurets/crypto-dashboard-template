import Tooltip from "rc-tooltip";
import React, { FC, useState } from "react";
import { Button, Icon, IconType } from "..";
import cn from "classnames";
import styles from "./WidgetControls.module.css";
import { map } from "lodash";

export type PeriodType = "1 day" | "1 week" | "30 days" | "3 month";

interface IWidgetControlsProps {
  buttonIcon?: IconType;
  onButtonClick?: () => void;
  onResizeClick?: () => void;
  onCloseClick?: () => void;
  withFilters?: boolean;
  onFilterClick?: (value: PeriodType) => void;
  activeFilter?: PeriodType;
  isShortMode?: boolean;
  renderCustomButton?: JSX.Element;
}

const filtersData: PeriodType[] = ["1 day", "1 week", "30 days", "3 month"];

export const WidgetControls: FC<IWidgetControlsProps> = ({
  buttonIcon = "Plus",
  onButtonClick,
  onResizeClick,
  onCloseClick,
  withFilters,
  onFilterClick,
  activeFilter,
  isShortMode,
  renderCustomButton,
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const dropdownContent = (
    <div className={styles.content}>
      {map(filtersData, (item) => (
        <button
          className={cn(styles.filter, {
            [styles.active]: item === activeFilter,
          })}
          key={item}
          onClick={() => onFilterClick && onFilterClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );

  return (
    <div className={styles.controls}>
      {withFilters && (
        <>
          <Tooltip
            overlayClassName="MainLayoutUserDropdown"
            placement="bottomRight"
            overlay={dropdownContent}
            trigger={["click"]}
            afterVisibleChange={(v) => setIsDropdownVisible(v)}
            overlayStyle={{ opacity: 1 }}
          >
            <button type="button">
              <span className={styles.button}>
                <span className={styles.text}>{activeFilter}</span>
                <Icon
                  name="ChevroneDown"
                  className={cn(styles.chevron, {
                    "rotate-180": isDropdownVisible,
                  })}
                />
              </span>
            </button>
          </Tooltip>
        </>
      )}
      {!isShortMode && !renderCustomButton && (
        <Button type="icon" icon={buttonIcon} onClick={onButtonClick} />
      )}
      {renderCustomButton}
      <Icon
        name="Resize"
        className={styles.controlsIcon}
        onClick={onResizeClick}
      />
      <Icon
        name="Cross"
        className={styles.controlsIcon}
        onClick={onCloseClick}
      />
    </div>
  );
};

export default WidgetControls;
