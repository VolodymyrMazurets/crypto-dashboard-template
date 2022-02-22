import { map, range } from "lodash";
import React, { FC, useMemo, useState } from "react";
import { useTable } from "react-table";
import cn from "classnames";
import styles from "./OptionsDrawerOrderBook.module.css";
import { Tabs } from "src/components/common";
import { OptionsDrawerOrderBookRecent } from "./OptionsDrawerOrderBookRecent";
import { OptionsDrawerOrderBookCharts } from "./OptionsDrawerOrderBookCharts";

export const OptionsDrawerOrderBook: FC = () => {
  const [activeTab, setActiveTab] = useState("Recent Trades");

  const columns = useMemo(
    () => [
      {
        Header: " ",
        columns: [
          {
            Header: "Total",
            accessor: "total",
          },
          {
            Header: "Bid Size",
            accessor: "size",
          },
          {
            Header: "Bid Price",
            accessor: "price",
            className: styles.green,
          },
          {
            Header: "Ask Price",
            accessor: "ask",
            className: styles.red,
          },
          {
            Header: "Ask Size",
            accessor: "ask_size",
          },
          {
            Header: "Total",
            accessor: "total2",
          },
        ],
      },
    ],
    []
  );

  const data = useMemo(
    () =>
      map(range(4), () => {
        return {
          total: "14.0",
          size: "14.0",
          price: "0.0873",
          mark: "0.7363",
          ask: "0.2372",
          ask_size: "4.3",
          total2: "4.3",
        };
      }),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const renderTabsContent = () => {
    switch (activeTab) {
      case "Recent Trades":
        return <OptionsDrawerOrderBookRecent />;

      default:
        return <OptionsDrawerOrderBookCharts />;
    }
  };

  return (
    <div className={styles.order}>
      <div className={styles.head}>
        <div className={styles.wrapper}>
          <span className={styles.name}>Mark Price </span>
          <span className={styles.value}>0.0292</span>
        </div>
        <div className={styles.wrapper}>
          <span className={styles.name}>24h Low</span>
          <span className={styles.value}>0.00</span>
        </div>
        <div className={styles.wrapper}>
          <span className={styles.name}>24h High</span>
          <span className={styles.value}>0.00</span>
        </div>
        <div className={styles.wrapper}>
          <span className={styles.name}>24h Volume</span>
          <span className={styles.value}>0.00</span>
        </div>
        <div className={styles.wrapper}>
          <span className={styles.name}>24h Change</span>
          <span className={styles.value}>0.00</span>
        </div>
      </div>
      <div className={styles.summary}>
        <table {...getTableProps()} className={styles.table}>
          <thead className={styles.tableHead}>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className={styles.tableHeadRow}
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className={styles.tableHeadRowCol}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className={styles.tableBody}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className={styles.tableBodyRow}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps([
                          {
                            className: cn(
                              styles.tableBodyRowCol,
                              // @ts-ignore
                              cell.column.className
                            ),
                          },
                        ])}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Tabs
        data={["Recent Trades", "Chart"]}
        activeTab={activeTab}
        onClick={setActiveTab}
        isDark
      />
      {renderTabsContent()}
    </div>
  );
};

export default OptionsDrawerOrderBook;
