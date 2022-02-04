import { map, range } from "lodash";
import React, { FC } from "react";
import { AdminCard } from "..";
import styles from "./AdminUserManagement.module.css";

interface IAdminUserManagementProps {
  isListMode?: boolean;
}

export const AdminUserManagement: FC<IAdminUserManagementProps> = ({
  isListMode,
}) => {
  return (
    <div className={styles.user}>
      {map(range(12), (item) => (
        <div className={styles.wrapper} key={item}>
          <AdminCard className={styles.card} />
        </div>
      ))}
    </div>
  );
};

export default AdminUserManagement;
