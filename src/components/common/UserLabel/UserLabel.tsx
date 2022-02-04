import React, { FC } from "react";
import styles from "./UserLabel.module.css";
import cn from "classnames";
import { Icon } from "..";

interface IUserLabelProps {
  name: string;
  email: string;
  className?: string;
}

export const UserLabel: FC<IUserLabelProps> = ({ name, email, className }) => {
  return (
    <div className={cn(styles.label, className)}>
      <span className={styles.name}>{name}</span>
      <span className={styles.email}>{email}</span>
      <Icon className={styles.icon} name="Cross" />
    </div>
  );
};

export default UserLabel;
