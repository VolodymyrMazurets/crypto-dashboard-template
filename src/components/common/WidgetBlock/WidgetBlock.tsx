import React, { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./WidgetBlock.module.css";

interface IWidgetBlockProps {
  className?: string;
  renderHeaderControls?: ReactNode;
  title?: string;
  withPadding?: boolean;
  headerClassName?: string;
}

export const WidgetBlock: FC<IWidgetBlockProps> = ({
  children,
  className,
  title,
  renderHeaderControls,
  withPadding = true,
  headerClassName,
}) => {
  return (
    <div
      className={cn(styles.wrapper, className, {
        [styles.withPadding]: withPadding,
      })}
    >
      <div className={cn(styles.header, headerClassName)}>
        <h4 className={styles.title}>{title}</h4>
        {renderHeaderControls}
      </div>
      {children}
    </div>
  );
};

export default WidgetBlock;
