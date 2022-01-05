import React, { FC } from "react";
import { Icon, IconType } from "src/components/common";
import Drawer from "rc-drawer";
import styles from "./MainLayoutSidebar.module.css";
import { NavLink } from "react-router-dom";
import { map } from "lodash";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "src/store";
import { toggleSidebar } from "src/store/slices/ui";
import "rc-drawer/assets/index.css";

const routes: { to: string; icon: IconType; label: string }[] = [
  {
    to: "/",
    icon: "Dashboard",
    label: "Dashboard",
  },
  {
    to: "futures",
    icon: "BarChart",
    label: "Futures",
  },
  {
    to: "options",
    icon: "BarChartV2",
    label: "Options",
  },
  {
    to: "analytics",
    icon: "PieChart",
    label: "Options",
  },
  {
    to: "trading-sandbox",
    icon: "Graph",
    label: "Trading Sandbox",
  },
];

export const MainLayoutSidebar: FC = () => {
  const dispatch = useAppDispatch();
  const { isSidebarOpen } = useAppSelector(({ ui }) => ui);
  return (
    <div className={styles.drawer}>
      <Icon
        name="Menu"
        onClick={() => dispatch(toggleSidebar())}
        className={styles.toggle}
      />
      <Drawer
        onClose={() => dispatch(toggleSidebar())}
        level={null}
        open={isSidebarOpen}
        handler={false}
        width={280}
        maskClosable
        height="100vh"
        contentWrapperStyle={{ background: "#22212D" }}
        style={{ outline: "none" }}
      >
        <div className={styles.menu}>
          <NavLink to="/" onClick={() => dispatch(toggleSidebar())}>
            <Icon name="WhiteLogo" className={styles.logo} />
          </NavLink>
          <ul className={styles.list}>
            {map(routes, ({ to, icon, label }) => (
              <li className={styles.item} key={to}>
                <NavLink
                  to={to}
                  onClick={() => dispatch(toggleSidebar())}
                  className={({ isActive }) =>
                    cn(styles.link, { [styles.active]: isActive })
                  }
                >
                  <Icon name={icon} className={styles.icon} />
                  <span className={styles.text}>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </div>
  );
};
export default MainLayoutSidebar;
