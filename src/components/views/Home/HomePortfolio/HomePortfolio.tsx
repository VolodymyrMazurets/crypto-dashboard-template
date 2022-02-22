import { size, xor } from "lodash";
import React, { FC, useMemo, useState } from "react";
import {
  Button,
  Checkbox,
  Dropdown,
  Icon,
  Input,
  ModalWindow,
  Periods,
  PeriodType,
  WidgetBlock,
  WidgetControls,
} from "src/components/common";
import { useAppDispatch } from "src/store";
import { disableHomeWidget } from "src/store/slices/ui";
import { HomeDailyChart } from "../HomeDaily/HomeDailyChart";
import styles from "./HomePortfolio.module.css";

export const HomePortfolio: FC = () => {
  const [activeFilter, setActiveFilter] = useState<PeriodType>("30 days");
  const [data, setData] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const renderDropdownContent = useMemo(() => {
    return (
      <div className={styles.dropdown}>
        <Input placeholder="Search" className={styles.input} />
        <span className={styles.info}>None accounts selected</span>

        <div className={styles.item}>
          <Checkbox
            value="1"
            data={data}
            onChange={() => setData(xor(data, ["1"]))}
          />
          <div className={styles.wrapper}>
            <Icon name="Binance" />
            <span className={styles.email}>allisonmadsen@example.com</span>
          </div>
        </div>
        <div className={styles.item}>
          <Checkbox
            value="2"
            data={data}
            onChange={() => setData(xor(data, ["2"]))}
          />
          <div className={styles.wrapper}>
            <Icon name="Binance" />
            <span className={styles.email}>allisonmadsen@example.com</span>
          </div>
        </div>
        <div className={styles.item}>
          <Checkbox
            value="3"
            data={data}
            onChange={() => setData(xor(data, ["3"]))}
          />
          <div className={styles.wrapper}>
            <Icon name="Binance" />
            <span className={styles.email}>allisonmadsen@example.com</span>
          </div>
        </div>
        <div className={styles.popverFooter}>
          <Button
            type="secondary"
            onClick={() => setData([])}
            disabled={size(data) === 0}
          >
            Reset
          </Button>
          <Button onClick={() => setSelectedValues(data)}>Compare</Button>
        </div>
      </div>
    );
  }, [setData, data]);

  const renderDropdown = useMemo(() => {
    return (
      <Dropdown
        dropdownContent={renderDropdownContent}
        placement="bottomRight"
        width={300}
        zIndex={10001}
      >
        <Button type="icon" icon="Scales" />
      </Dropdown>
    );
  }, [renderDropdownContent]);

  return (
    <>
      <ModalWindow
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        title="Portfolio"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1042,
          height: 462,
        }}
        renderHeadContent={
          <div className={styles.controls}>
            <Periods
              activePeriod={activeFilter}
              setActivePeriod={setActiveFilter}
            />
            {renderDropdown}
          </div>
        }
      >
        <div className={styles.modal}>
          <HomeDailyChart
            checked={selectedValues}
            activePeriod={activeFilter}
          />
        </div>
      </ModalWindow>
      <WidgetBlock
        title="Portfolio"
        renderHeaderControls={
          <WidgetControls
            buttonIcon="Scales"
            withFilters
            onFilterClick={setActiveFilter}
            activeFilter={activeFilter}
            renderCustomButton={renderDropdown}
            onResizeClick={() => setIsModalVisible(true)}
            onCloseClick={() => dispatch(disableHomeWidget("portfolio"))}
          />
        }
        className={styles.portfolio}
      >
        <HomeDailyChart checked={selectedValues} activePeriod={activeFilter} />
      </WidgetBlock>
    </>
  );
};

export default HomePortfolio;
