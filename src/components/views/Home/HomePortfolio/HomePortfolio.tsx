import { size, xor } from "lodash";
import React, { FC, useMemo, useState } from "react";
import {
  Button,
  Checkbox,
  Dropdown,
  Icon,
  Input,
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
      >
        <Button type="icon" icon="Scales" />
      </Dropdown>
    );
  }, [renderDropdownContent]);

  return (
    <WidgetBlock
      title="Portfolio"
      renderHeaderControls={
        <WidgetControls
          buttonIcon="Scales"
          withFilters
          onFilterClick={setActiveFilter}
          activeFilter={activeFilter}
          renderCustomButton={renderDropdown}
          onCloseClick={() => dispatch(disableHomeWidget("portfolio"))}
        />
      }
      className={styles.portfolio}
    >
      <HomeDailyChart checked={selectedValues} activePeriod={activeFilter} />
    </WidgetBlock>
  );
};

export default HomePortfolio;
