import React, { FC } from "react";
import { HomePositions } from "src/components";
import styles from "./Home.module.css";

export const Home: FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.positions}>
        <HomePositions />
      </div>
    </div>
  );
};

export default Home;
