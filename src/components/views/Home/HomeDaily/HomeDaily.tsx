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
import styles from "./HomeDaily.module.css";
import { HomeDailyChart } from "./HomeDailyChart";

export const HomeDaily: FC = () => {
  const [activeFilter, setActiveFilter] = useState<PeriodType>("30 days");
  const [value, setValue] = useState<string>("1");

  const renderDropdownContent = useMemo(() => {
    return (
      <div className={styles.dropdown}>
        <Input placeholder="Search" className={styles.input} />
        <span className={styles.info}>None accounts selected</span>

        <div className={styles.item}>
          <Checkbox
            value={value}
            data={["1", "2", "3"]}
            onChange={() => setValue("1")}
          />
          <div className={styles.wrapper}>
            <Icon name="Binance" />
            <span className={styles.email}>allisonmadsen@example.com</span>
          </div>
        </div>
        <div className={styles.item}>
          <Checkbox
            value={value}
            data={["1", "2", "3"]}
            onChange={() => setValue("2")}
          />
          <div className={styles.wrapper}>
            <Icon name="Binance" />
            <span className={styles.email}>allisonmadsen@example.com</span>
          </div>
        </div>
        <div className={styles.item}>
          <Checkbox
            value={value}
            data={["1", "2", "3"]}
            onChange={() => setValue("2")}
          />
          <div className={styles.wrapper}>
            <Icon name="Binance" />
            <span className={styles.email}>allisonmadsen@example.com</span>
          </div>
        </div>
      </div>
    );
  }, [value]);

  const renderDropdown = useMemo(() => {
    return (
      <Dropdown
        dropdownContent={renderDropdownContent}
        placement="bottomRight"
        width={278}
      >
        <Button type="icon" icon="Scales" />
      </Dropdown>
    );
  }, [renderDropdownContent]);

  return (
    <WidgetBlock
      title="Daily PNL"
      renderHeaderControls={
        <WidgetControls
          buttonIcon="Scales"
          withFilters
          onFilterClick={setActiveFilter}
          activeFilter={activeFilter}
          renderCustomButton={renderDropdown}
        />
      }
      className={styles.homeDaily}
    >
      <HomeDailyChart activePeriod={activeFilter} />
    </WidgetBlock>
  );
};

export default HomeDaily;
