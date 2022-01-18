import React, { FC, useMemo } from "react";
import { useTable } from "react-table";
import { Icon } from "src/components/common";
import styles from "./HomeAccountSummary.module.css";

export const HomeAccountSummary: FC = () => {
  const columns = useMemo(
    () => [
      {
        Header: " ",
        columns: [
          {
            Header: "",
            accessor: "coin",
          },
          {
            Header: "Equity",
            accessor: "equity",
          },
          {
            Header: "Available Balance",
            accessor: "availableBalance",
          },
          {
            Header: "Margin Balance",
            accessor: "marginBalance",
          },
          {
            Header: "PNL",
            accessor: "pnl",
          },
          {
            Header: "IM (Projected)",
            accessor: "im",
          },
          {
            Header: "MM (Projected)",
            accessor: "mm",
          },
          {
            Header: "Delta Total (Projected)",
            accessor: "deltaTotal",
          },
        ],
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        coin: "BTC",
        equity: "9.9876",
        availableBalance: "9.9876",
        marginBalance: "9.9876",
        pnl: "9.9876",
        im: "9.9876",
        mm: "9.9876",
        deltaTotal: "9.9876",
      },
      {
        coin: "ETN",
        equity: "9.9876",
        availableBalance: "9.9876",
        marginBalance: "9.9876",
        pnl: "9.9876",
        im: "9.9876",
        mm: "9.9876",
        deltaTotal: "9.9876",
      },
      {
        coin: "BTC",
        equity: "9.9876",
        availableBalance: "9.9876",
        marginBalance: "9.9876",
        pnl: "9.9876",
        im: "9.9876",
        mm: "9.9876",
        deltaTotal: "9.9876",
      },
      {
        coin: "ETN",
        equity: "9.9876",
        availableBalance: "9.9876",
        marginBalance: "9.9876",
        pnl: "9.9876",
        im: "9.9876",
        mm: "9.9876",
        deltaTotal: "9.9876",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (
    <div className={styles.account}>
      <div className={styles.head}>
        <h4 className={styles.title}>Account Summary</h4>
        <div className={styles.headWrapper}>
          <Icon name="Resize" className={styles.headIcon} />
          <Icon name="Cross" className={styles.headIcon} />
        </div>
      </div>
      <div className={styles.wrapper}>
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
                        {...cell.getCellProps()}
                        className={styles.tableBodyRowCol}
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

export default HomeAccountSummary;
