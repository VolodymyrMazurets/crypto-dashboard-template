import React, { FC, useState } from "react";
import { Tabs } from "src/components/common";
import styles from "./OptionsTabsWidget.module.css";
import { OptionsTabsWidgetPositions } from "./OptionsTabsWidgetPositions";

export const OptionsTabsWidget: FC = () => {
  const [activeTab, setActiveTab] = useState("Positions");

  const renderTab = () => {
    switch (activeTab) {
      case "Positions":
        return <OptionsTabsWidgetPositions />;

      default:
        return <div>tab</div>;
    }
  };
  return (
    <div className={styles.tabs}>
      <div className={styles.head}>
        <Tabs
          data={["Positions", "Open Orders", "Order History", "Trade History"]}
          activeTab={activeTab}
          onClick={setActiveTab}
        />
      </div>
      {renderTab()}
    </div>
  );
};

export default OptionsTabsWidget;
