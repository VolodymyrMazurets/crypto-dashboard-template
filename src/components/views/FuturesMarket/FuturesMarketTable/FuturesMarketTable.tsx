import { map, range } from "lodash";
import React, { FC, useMemo, useState } from "react";
import { useTable } from "react-table";
import cn from "classnames";
import styles from "./FuturesMarketTable.module.css";
import { Tabs } from "src/components/common";

export const FuturesMarketTable: FC = () => {
  const [activeTab, setActiveTab] = useState("Positions");
  const columns = useMemo(
    () => [
      {
        Header: " ",
        columns: [
          {
            Header: "Instrument",
            accessor: "instrument",
          },
          {
            Header: "Size",
            accessor: "size",
            className: styles.red,
          },
          {
            Header: "Value",
            accessor: "value",
          },
          {
            Header: "Avg. Price",
            accessor: "avg_price",
          },
          {
            Header: "Mark Price",
            accessor: "mark_price",
          },
          {
            Header: "ELP",
            accessor: "ELP",
          },
          {
            Header: "RSPL",
            accessor: "RSPL",
          },
          {
            Header: "PNL",
            accessor: "PNL",
            className: styles.green,
          },
          {
            Header: "ROI",
            accessor: "ROI",
            className: styles.green,
          },
          {
            Header: "IM",
            accessor: "IM",
          },
          {
            Header: "MM",
            accessor: "MM",
          },
          {
            Header: "Delta",
            accessor: "delta",
          },
          {
            Header: "Gamma",
            accessor: "gamma",
          },
          {
            Header: "Vega",
            accessor: "vega",
          },
          {
            Header: "Theta",
            accessor: "theta",
          },
          {
            Header: "Rho",
            accessor: "rho",
          },
        ],
      },
    ],
    []
  );

  const data = useMemo(
    () =>
      map(range(15), () => {
        return {
          instrument: "BTC-10DEC2021-57000C",
          size: "-9.00",
          value: "-1.118",
          avg_price: "9273.82",
          mark_price: "6283.82",
          ELP: "-0.0001",
          RSPL: "-0.0192",
          PNL: "0.8273 BTC",
          ROI: "2833.92%",
          IM: "0.0182",
          MM: "0.0192",
          delta: "0.0192",
          gamma: "0.0192",
          vega: "0.0192",
          theta: "0.0192",
          rho: "0.0192",
        };
      }),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const renderTable = useMemo(() => {
    return (
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
    );
  }, [getTableBodyProps, getTableProps, headerGroups, prepareRow, rows]);

  const renderTab = useMemo(() => {
    switch (activeTab) {
      case "Positions":
        return renderTable;
      case "Open Orders":
        return renderTable;
      case "Order History":
        return renderTable;

      default:
        return renderTable;
    }
  }, [activeTab, renderTable]);

  return (
    <div className={styles.order}>
      <Tabs
        data={["Positions", "Open Orders", "Order History", "Trade History"]}
        activeTab={activeTab}
        onClick={setActiveTab}
        isDark
        className={styles.tabs}
      />
      <div className={styles.summary}>{renderTab}</div>
    </div>
  );
};

export default FuturesMarketTable;
