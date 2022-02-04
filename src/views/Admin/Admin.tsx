import React, { FC, useMemo, useState } from "react";
import { Button, Icon, ITabsData, Tabs } from "src/components/common";
import cn from "classnames";
import styles from "./Admin.module.css";
import { AdminExchange, AdminUserManagement } from "src/components/views/Admin";
import { AdminApi } from "src/components/views/Admin/AdminApi";

const tabsData: ITabsData = [
  "User Management",
  "Exchange Accounts",
  "API Access",
];

export const Admin: FC = () => {
  const [activeTab, setActiveTab] = useState<string>("User Management");
  const [isListView, setIsListView] = useState(false);

  const renderContent = useMemo(() => {
    switch (activeTab) {
      case "Exchange Accounts":
        return <AdminExchange />;
      case "API Access":
        return <AdminApi isListMode={isListView} />;
      default:
        return <AdminUserManagement />;
    }
  }, [activeTab, isListView]);

  return (
    <div className={styles.admin}>
      <div className={styles.header}>
        <div className={styles.tabs}>
          <Tabs
            data={tabsData}
            onClick={(name) => setActiveTab(name)}
            activeTab={activeTab}
          />
        </div>
        <Icon
          name="Cards"
          className={cn(styles.control, { [styles.active]: !isListView })}
          onClick={() => setIsListView(false)}
        />
        <Icon
          name="Table"
          className={cn(styles.control, { [styles.active]: isListView })}
          onClick={() => setIsListView(true)}
        />
        <Button>Add New User</Button>
      </div>
      <div className={styles.content}>{renderContent}</div>
    </div>
  );
};
export default Admin;
