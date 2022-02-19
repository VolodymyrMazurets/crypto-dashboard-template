import React, { FC } from "react";
import { WidgetBlock, WidgetControls } from "src/components/common";
import { useAppDispatch } from "src/store";
import { disableHomeWidget } from "src/store/slices/ui";
import styles from "./HomeMarginRatio.module.css";

export const HomeMarginRatio: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <WidgetBlock
      title="Margin Ratio"
      renderHeaderControls={
        <WidgetControls
          buttonIcon="Scales"
          onCloseClick={() => dispatch(disableHomeWidget("marginRatio"))}
        />
      }
      className={styles.watchlist}
    >
      <div className={styles.content}>
        <div className={styles.names}>
          <div className={styles.namesCol}>
            <span className={styles.namesValue}>Total Collateral</span>
          </div>
          <div className={styles.namesCol}>
            <span className={styles.namesValue}>Free Collateral</span>
          </div>
          <div className={styles.namesCol}>
            <span className={styles.namesValue}>Margin Ratio</span>
          </div>
          <div className={styles.namesCol}>
            <span className={styles.namesValue}>Margin Balance</span>
          </div>
          <div className={styles.namesCol}>
            <span className={styles.namesValue}>Risk Summary</span>
          </div>
        </div>
        <div className={styles.values}>
          <div className={styles.valuesCol}>
            <span className={styles.valuesValue}>$6,740.0</span>
          </div>
          <div className={styles.valuesCol}>
            <span className={styles.valuesValue}>$1,740.0</span>
          </div>
          <div className={styles.valuesCol}>
            <span className={styles.valuesValue}>0.73%</span>
          </div>
          <div className={styles.valuesCol}>
            <span className={styles.valuesValue}>0.0152 USDT</span>
          </div>
          <div className={styles.valuesCol}>
            <span className={styles.valuesValue}>0.73%</span>
          </div>
        </div>
      </div>
    </WidgetBlock>
  );
};

export default HomeMarginRatio;
