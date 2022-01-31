import { map, random, range } from "lodash";
import React, { FC, useMemo } from "react";
import { useTable } from "react-table";
import { Icon, IconType } from "src/components/common";
import cn from "classnames";
import styles from "./OptionsTradesCalls.module.css";

export const OptionsTradesCalls: FC = () => {
  const columns = useMemo(
    () => [
      {
        Header: " ",
        columns: [
          {
            Header: "Side",
            accessor: "side",
            Cell: (props: { value: string }) => {
              const { value } = props;
              return (
                <span
                  className={cn(
                    styles.value,
                    value === "SELL" ? styles.red : styles.green
                  )}
                >
                  {value}
                </span>
              );
            },
          },
          {
            Header: "Instrument",
            accessor: "instrument",
            Cell: (props: {
              value: string;
              row: { values: { side: string } };
            }) => {
              const { value, row } = props;
              return (
                <span
                  className={cn(
                    styles.value,
                    row.values.side === "SELL" ? styles.red : styles.green
                  )}
                >
                  {value}
                </span>
              );
            },
          },
          {
            Header: "Price",
            accessor: "price",
          },
          {
            Header: "Price($)",
            accessor: "prise_usd",
          },
          {
            Header: "IV",
            accessor: "iv",
          },
          {
            Header: "Size",
            accessor: "size",
          },
          {
            Header: "THEO Profit",
            accessor: "profit",
          },
          {
            Header: "Exchange",
            accessor: "exchange",
            Cell: (props: { value: string }) => {
              const { value } = props;
              return (
                <div className={styles.exchange}>
                  <Icon name={value as IconType} className={styles.binance} />
                </div>
              );
            },
          },
        ],
      },
    ],
    []
  );

  const data = useMemo(
    () =>
      map(range(10), (v) => {
        const getIcon = () => {
          const randomNumber = random(1, 3);
          if (randomNumber === 1) {
            return "Binance";
          }
          if (randomNumber === 2) {
            return "Deribit";
          }
          if (randomNumber === 3) {
            return "FTX";
          }
        };
        return {
          side: v % 2 ? "SELL" : "BUY",
          instrument: "BTC-10DEC2021-57000C.0",
          price: "-1.1822",
          prise_usd: "9273.82",
          iv: "6283.82",
          size: "-0.0001",
          profit: "-0.0192",
          exchange: getIcon(),
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
    <div className={styles.positions}>
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

export default OptionsTradesCalls;
