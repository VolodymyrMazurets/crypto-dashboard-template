import { map, random, range } from "lodash";
import React, { FC, useMemo } from "react";
import { useTable } from "react-table";
import { Icon, IconType } from "src/components/common";
import cn from "classnames";
import styles from "./OptionsTabsWidgetPositions.module.css";

export const OptionsTabsWidgetPositions: FC = () => {
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
            accessor: "avg",
          },
          {
            Header: "Mark Price",
            accessor: "mark",
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
          instrument: "BTC-10DEC2021-57000C.0",
          size: "-8.00",
          value: "-1.1822",
          avg: "9273.82",
          mark: "6283.82",
          ELP: "-0.0001",
          RSPL: "-0.0192",
          PNL: "0.8273 BTC",
          ROI: "2833.92%",
          IM: "0.0182",
          MM: "0.0192",
          delta: "0.00",
          gamma: "0.00",
          vega: "0.00",
          theta: "0.00",
          rho: "0.00",
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

export default OptionsTabsWidgetPositions;
