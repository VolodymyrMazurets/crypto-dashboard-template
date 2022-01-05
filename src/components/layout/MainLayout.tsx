import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { Button, Icon } from "../common";
import styles from "./MainLayout.module.css";
import { MainLayoutCoinButton } from "./MainLayoutCoinButton";
import { MainLayoutLangDropdown } from "./MainLayoutLangDropdown";
import { MainLayoutSidebar } from "./MainLayoutSidebar";

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
        </div>
      </header>
      <div className={styles.page}>{children}</div>
    </div>
  );
};

export default MainLayout;
