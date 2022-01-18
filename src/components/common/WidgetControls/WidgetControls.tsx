import React, { FC } from "react";
import { Button, Icon, IconType } from "..";
import styles from "./WidgetControls.module.css";

interface IWidgetControlsProps {
  buttonIcon?: IconType;
}

export const WidgetControls: FC<IWidgetControlsProps> = ({
  buttonIcon = "Plus",
}) => {
  return (
    <div className={styles.controls}>
      <Button type="icon" icon={buttonIcon} />
      <Icon name="Resize" className={styles.controlsIcon} />
      <Icon name="Cross" className={styles.controlsIcon} />
    </div>
  );
};

export default WidgetControls;
