import React, { FC } from "react";
import { Button, Icon, IconType } from "..";
import styles from "./WidgetControls.module.css";

interface IWidgetControlsProps {
  buttonIcon?: IconType;
  onButtonClick?: () => void;
  onResizeClick?: () => void;
  onCloseClick?: () => void;
}

export const WidgetControls: FC<IWidgetControlsProps> = ({
  buttonIcon = "Plus",
  onButtonClick,
  onResizeClick,
  onCloseClick,
}) => {
  return (
    <div className={styles.controls}>
      <Button type="icon" icon={buttonIcon} onClick={onButtonClick} />
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
