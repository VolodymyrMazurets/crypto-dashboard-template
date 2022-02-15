import React, { FC } from "react";
import { Icon } from "src/components/common";
import styles from "./Futures.module.css";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";



export const Futures: FC = withAuthenticationRequired(() => {
  return (
    <div className={styles.futures}>
      <div className={styles.head}>
        <button type="button" className={styles.dropdownButton}>
          All Exchanges <Icon name="ChevroneDown" className={styles.chevrone} />
        </button>
      </div>
      <Outlet />
    </div>
  );
});

export default Futures;
