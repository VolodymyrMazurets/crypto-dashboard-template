import { map, range } from "lodash";
import React, { FC, useMemo } from "react";
import { useTable } from "react-table";
import cn from "classnames";
import styles from "./FuturesMarketTrades.module.css";

export const FuturesMarketTrades: FC = () => {
  const columns = useMemo(
    () => [
      {
        Header: " ",
        columns: [
          {
            Header: "Prise (USD)",
            accessor: "price",
            className: styles.green,
          },
          {
            Header: "Size",
            accessor: "size",
          },
          {
            Header: "Time",
            accessor: "time",
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
          price: "14.0",
          size: "0.0873",
          time: "0.2372",
        };
      }),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className={styles.order}>
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
    </div>
  );
};

export default FuturesMarketTrades;
