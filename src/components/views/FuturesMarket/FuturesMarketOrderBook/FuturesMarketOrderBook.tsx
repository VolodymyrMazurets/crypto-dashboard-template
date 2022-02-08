import { map, range } from "lodash";
import React, { FC, useMemo } from "react";
import { useTable } from "react-table";
import cn from "classnames";
import styles from "./FuturesMarketOrderBook.module.css";

export const FuturesMarketOrderBook: FC = () => {
  const columns = useMemo(
    () => [
      {
        Header: " ",
        columns: [
          {
            Header: "Bid Size (FFT)",
            accessor: "size",
          },
          {
            Header: "Bid Price (USD)",
            accessor: "price",
            className: styles.green,
          },
          {
            Header: "Ask Price (USD)",
            accessor: "ask",
            className: styles.red,
          },
          {
            Header: "Ask Size (FTT)",
            accessor: "ask_size",
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
          size: "14.0",
          price: "0.0873",
          ask: "0.2372",
          ask_size: "4.3",
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

export default FuturesMarketOrderBook;
