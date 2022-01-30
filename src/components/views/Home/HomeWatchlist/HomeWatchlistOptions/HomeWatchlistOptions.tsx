import { map, random, range } from "lodash";
import React, { FC, useMemo } from "react";
import { useTable } from "react-table";
import cn from "classnames";
import styles from "./HomeWatchlistOptions.module.css";
import { Icon, IconType } from "src/components/common";

export const HomeWatchlistOptions: FC = () => {
  const columns = useMemo(
    () => [
      {
        Header: " ",
        columns: [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Size",
            accessor: "size",
          },
          {
            Header: "IV (Bid)",
            accessor: "iv",
          },
          {
            Header: "Bid",
            accessor: "bid",
            className: styles.bid,
          },
          {
            Header: "Mark",
            accessor: "mark",
          },
          {
            Header: "Ask",
            accessor: "ask",
            className: styles.ask,
          },
          {
            Header: "IV (Ask)",
            accessor: "iv2",
          },
          {
            Header: "Size",
            accessor: "size2",
          },
          {
            Header: "Open",
            accessor: "open",
          },
          {
            Header: "Delta",
            accessor: "delta",
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
          {
            Header: "Strike",
            accessor: "strike",
          },
        ],
      },
    ],
    []
  );

  const data = useMemo(
    () =>
      map(range(10), () => {
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
          name: "BTC-10DEC2021-57000C.0",
          size: "18.0",
          iv: "64.02%",
          bid: "0.7363",
          mark: "0.7363",
          ask: "0.2372",
          iv2: "102.82%",
          size2: "5.7",
          open: "-",
          delta: "1.00",
          exchange: getIcon(),
          strike: "35,828.29",
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
    <div className={styles.options}>
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

export default HomeWatchlistOptions;
