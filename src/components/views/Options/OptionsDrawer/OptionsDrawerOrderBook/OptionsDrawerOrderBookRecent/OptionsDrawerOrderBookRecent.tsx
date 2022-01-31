import React, { FC, useMemo } from "react";
import styles from "./OptionsDrawerOrderBookRecent.module.css";
import cn from "classnames";
import { map, range } from "lodash";
import { useTable } from "react-table";

export const OptionsDrawerOrderBookRecent: FC = () => {
  const columns = useMemo(
    () => [
      {
        Header: " ",
        columns: [
          {
            Header: "Price",
            accessor: "price",
            className: styles.green,
          },
          {
            Header: "Price ($)",
            accessor: "price_usd",
          },
          {
            Header: "IV",
            accessor: "iv",
          },
          {
            Header: "Amount",
            accessor: "amount",
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
      map(range(4), () => {
        return {
          price: "0.0873",
          price_usd: "1.0873",
          iv: "74%",
          amount: "2.8",
          time: "2021-05-21 12:34",
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
  );
};

export default OptionsDrawerOrderBookRecent;
