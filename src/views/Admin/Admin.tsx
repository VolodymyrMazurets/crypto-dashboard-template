import React, { FC, useMemo, useState } from "react";
import {
  Button,
  Icon,
  ITabsData,
  ModalWindow,
  Tabs,
} from "src/components/common";
import cn from "classnames";
import styles from "./Admin.module.css";
import {
  AdminAccountModal,
  AdminExchange,
  AdminUserManagement,
  AdminUserManagementModal,
} from "src/components/views/Admin";
import { AdminApi } from "src/components/views/Admin/AdminApi";
import { AdminApiModal } from "src/components/views/Admin/AdminApiModal";

const tabsData: ITabsData = [
  "User Management",
  "Exchange Accounts",
  "API Access",
];

export const Admin: FC = () => {
  const [activeTab, setActiveTab] = useState<string>("User Management");
  const [isListView, setIsListView] = useState(false);
  const [isUserModalVisible, setIsUserModalVisible] = useState(false);
  const [isAccountModalVisible, setIsAccountModalVisible] = useState(false);
  const [isApiModalVisible, setIsApiModalVisible] = useState(false);

  const renderContent = useMemo(() => {
    switch (activeTab) {
      case "Exchange Accounts":
        return <AdminExchange isListMode={isListView} />;
      case "API Access":
        return <AdminApi isListMode={isListView} />;
      default:
        return (
          <AdminUserManagement
            isListMode={isListView}
            onManageClick={() => setIsUserModalVisible(true)}
          />
        );
    }
  }, [activeTab, isListView]);

  const renderButton = useMemo(() => {
    switch (activeTab) {
      case "Exchange Accounts":
        return (
          <Button onClick={() => setIsAccountModalVisible(true)}>
            Add Account
          </Button>
        );
      case "API Access":
        return (
          <Button onClick={() => setIsApiModalVisible(true)}>
            Generate API Key
          </Button>
        );
      default:
        return (
          <Button onClick={() => setIsUserModalVisible(true)}>
            Add New User
          </Button>
        );
    }
  }, [activeTab]);

  return (
    <div className={styles.admin}>
      <ModalWindow
        isOpen={isUserModalVisible}
        onClose={() => setIsUserModalVisible(false)}
        title="Add Account"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 820,
          maxHeight: "80vh",
        }}
      >
        <AdminUserManagementModal />
      </ModalWindow>
      <ModalWindow
        isOpen={isAccountModalVisible}
        onClose={() => setIsAccountModalVisible(false)}
        title="User Management"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 650,
          maxHeight: "80vh",
        }}
      >
        <AdminAccountModal />
      </ModalWindow>
      <ModalWindow
        isOpen={isApiModalVisible}
        onClose={() => setIsApiModalVisible(false)}
        title="Generate New API Key"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 650,
          maxHeight: "80vh",
        }}
      >
        <AdminApiModal />
      </ModalWindow>
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
        <div className={styles.buttonWrapper}>{renderButton}</div>
      </div>
      <div className={styles.content}>{renderContent}</div>
    </div>
  );
};
export default Admin;
