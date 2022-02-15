import React, { FC, useCallback, useState } from "react";
import styles from "./HomeAdjustModal.module.css";
import { Button, Icon, ModalWindow, Slider } from "src/components/common";
import { toggleAdjustModal } from "src/store/slices/ui";
import { useAppDispatch, useAppSelector } from "src/store";
import { map } from "lodash";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

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

export const HomeAdjustModal: FC = () => {
  const [value, setValue] = useState(60);
  const dispatch = useAppDispatch();
  const { isAdjustModalVisible } = useAppSelector(({ ui }) => ui);

  const onControlMinusClick = useCallback(() => {
    switch (value) {
      case 1:
        return;

      default:
        setValue(value - 1);
    }
  }, [value]);

  const onControlPlusClick = useCallback(() => {
    switch (value) {
      case 125:
        return;

      default:
        setValue(value + 1);
    }
  }, [value]);
  return (
    <ModalWindow
      isOpen={isAdjustModalVisible}
      onClose={() => dispatch(toggleAdjustModal())}
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
          <Accordion
            allowZeroExpanded
            className={styles.accordion}
            allowMultipleExpanded
          >
            <AccordionItem className={styles.accordionItem}>
              <AccordionItemHeading>
                <AccordionItemButton className={styles.accordionHead}>
                  <Icon name="ChevroneRight" className={styles.icon} />
                  <span className={styles.tabName}>Order Book</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel style={{ padding: 0 }}>
                <div className={styles.table}>
                  {map(tableData, ({ name, value }) => (
                    <div key={name} className={styles.item}>
                      <span className={styles.name}>{name}</span>
                      <span className={styles.value}>{value}</span>
                    </div>
                  ))}
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className={styles.controls}>
          <Icon
            name="Minus"
            onClick={() => onControlMinusClick()}
            className={styles.controlBtn}
          />
          <h4 className={styles.controlValue}>{value}X</h4>
          <Icon
            name="Plus"
            onClick={() => onControlPlusClick()}
            className={styles.controlBtn}
          />
        </div>
        <div className={styles.slider}>
          <Slider value={value} onChange={setValue} />
        </div>
        <div className={styles.footer}>
          <Button
            onClick={() => dispatch(toggleAdjustModal())}
            type="secondary"
          >
            Cancel
          </Button>
          <Button onClick={() => dispatch(toggleAdjustModal())}>Confirm</Button>
        </div>
      </div>
    </ModalWindow>
  );
};

export default HomeAdjustModal;
