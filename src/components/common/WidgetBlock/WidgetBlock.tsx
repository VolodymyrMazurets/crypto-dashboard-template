import React, { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./WidgetBlock.module.css";

interface IWidgetBlockProps {
  className?: string;
  renderHeaderControls?: ReactNode;
  title?: string;
}

export const WidgetBlock: FC<IWidgetBlockProps> = ({
  children,
  className,
  title,
  renderHeaderControls,
}) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.header}>
        <h4 className={styles.title}>{title}</h4>
        {renderHeaderControls}
      </div>
      {children}
    </div>
  );
};

export default WidgetBlock;
