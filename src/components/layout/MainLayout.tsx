import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { Button, Icon } from "../common";
import styles from "./MainLayout.module.css";
import { MainLayoutCoinButton } from "./MainLayoutCoinButton";
import { MainLayoutControls } from "./MainLayoutControls";
import { MainLayoutLangDropdown } from "./MainLayoutLangDropdown";
import { MainLayoutSidebar } from "./MainLayoutSidebar";
import { MainLayoutUserDropdown } from "./MainLayoutUserDropdown";

export const MainLayout: FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <MainLayoutSidebar />
          <NavLink to="/">
            <Icon name="WhiteLogo" />
          </NavLink>
          <MainLayoutCoinButton isActive />
          <MainLayoutCoinButton icon="EthereumFilled" coin="ETH" />
          <Button type="icon" icon="Plus" isBig />
        </div>
        <div className={styles.wrapper}>
          <MainLayoutLangDropdown />
          <Button type="icon" icon="Notification" />
          <MainLayoutUserDropdown />
        </div>
      </header>
      <div className={styles.content}>
        <MainLayoutControls />
        <div className={styles.page}>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
