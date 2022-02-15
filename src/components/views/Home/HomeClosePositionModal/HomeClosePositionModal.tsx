import React, { FC } from "react";
import styles from "./HomeClosePositionModal.module.css";
import { Button, Icon, ModalWindow } from "src/components/common";
import { toggleClosePositionModal } from "src/store/slices/ui";
import { useAppDispatch, useAppSelector } from "src/store";
import { map } from "lodash";

const tableData = [
  {
    name: "Isolated 3X",
    value: "",
  },
  {
    name: "TP/SL",
    value: "-- / 2.432,5",
  },
  {
    name: "Funding",
    value: "0.7363%",
  },
  {
    name: "Size (LTC)",
    value: "1.127",
  },
  {
    name: "PNL (ROE%)",
    value: "-10.5262 (-10.08%)",
  },
  {
    name: "Margin",
    value: "107.9123",
  },
  {
    name: "Entry Price",
    value: "107.9123",
  },
  {
    name: "Mark Price",
    value: "107.9123",
  },
  {
    name: "Liq. Price",
    value: "107.9123",
  },
];

export const HomeClosePositionModal: FC = () => {
  const dispatch = useAppDispatch();
  const { isClosePositionModalOpen } = useAppSelector(({ ui }) => ui);
  return (
    <ModalWindow
      isOpen={isClosePositionModalOpen}
      onClose={() => dispatch(toggleClosePositionModal())}
      title="Adjust Leverage"
      headerPaddingLess
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 562,
        maxHeight: "80vh",
      }}
    >
      <div className={styles.modal}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h2 className={styles.title}>BTC-10DEC2021-5599C.0</h2>
            <Icon name="Sticks" />
          </div>
          <div className={styles.table}>
            {map(tableData, ({ name, value }) => (
              <div key={name} className={styles.item}>
                <span className={styles.name}>{name}</span>
                <span className={styles.value}>{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.footer}>
          <Button type="secondary" onClick={() => dispatch(toggleClosePositionModal())}>Cancel</Button>
          <Button type="danger" onClick={() => dispatch(toggleClosePositionModal())}>Close Position</Button>
        </div>
      </div>
    </ModalWindow>
  );
};

export default HomeClosePositionModal;
