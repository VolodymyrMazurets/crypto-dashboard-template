import { includes, map, random, range, size, xor } from "lodash";
import React, { FC, useMemo, useState } from "react";
import { useTable } from "react-table";
import cn from "classnames";
import styles from "./HomeWatchlistFuturesModal.module.css";
import { Button, Icon, IconType } from "src/components/common";

// Return random exchange icon
const getRandomExchangeIcon = () => {
  const exchanges = ["Binance", "Deribit", "FTX"];
  const randomIndex = Math.floor(Math.random() * exchanges.length);
  return exchanges[randomIndex] as IconType;
};


interface IHomeWatchlistFuturesModalProps {
  onCancel?: () => void;
  onItemClick?: () => void;
  footer?: boolean;
}

export const HomeWatchlistFuturesModal: FC<IHomeWatchlistFuturesModalProps> = ({
  onCancel,
  onItemClick,
  footer = true,
}) => {
  const [selectedRows, setSelectedRows] = useState<Array<string | number>>([]);
  const columns = useMemo(
    () => [
      {
        Header: " ",
        columns: [
          {
            Header: "Ticker",
            accessor: "ticker",
            Cell: (props: { value: string; row: { index: number } }) => {
              return (
                <div className={styles.ticker}>
                  <Icon
                    name={
                      props.row.index % 2 ? "BitcoinFilled" : "EthereumFilled"
                    }
                    className={styles.coin}
                  />
                  <span className={styles.value}>{props.value}</span>
                </div>
              );
            },
          },
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "24h Volume",
            accessor: "volume",
          },
          {
            Header: "Price",
            accessor: "price",
          },
          {
            Header: "Daily Change",
            accessor: "daily_change",
            Cell: (props: { value: string; row: { index: number } }) => {
              return (
                <div className={styles.daily}>
                  <Icon
                    name={props.row.index % 2 ? "Dropdown" : "DropdownUp"}
                    className={cn(styles.arrow, {
                      [styles.red]: props.row.index % 2,
                    })}
                  />
                  <span
                    className={cn(styles.value, styles.colored, {
                      [styles.red]: props.row.index % 2,
                    })}
                  >
                    {props.value}
                  </span>
                </div>
              );
            },
          },
          {
            Header: "Open Interest",
            accessor: "interest",
          },
          {
            Header: "Funding Rate",
            accessor: "rate",
          },
          {
            Header: "Exchange",
            accessor: "exchange",
            Cell: (props: { value: string; row: { index: number } }) => {
              return (
                <div className={styles.exchange}>
                  <Icon name={getRandomExchangeIcon()} className={styles.exchange} />
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
      map(range(10), (item) => ({
        ticker: item % 2 ? "BTC-PERP" : "ETH-PERP",
        name:
          item % 2 ? "Bitcoin Perpetual Futures" : "Ethereum Perpetual Futures",
        volume: "$3,823,273,273.72",
        price: "48,723",
        daily_change: "5,95",
        interest: "$2,736,273,273.72",
        rate: "0.001%",
        exchange: "binance",
      })),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (
    <div className={styles.futures}>
      <div className={styles.tableWrapper}>
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
                <tr
                  {...row.getRowProps()}
                  className={cn(styles.tableBodyRow, {
                    [styles.active]: includes(selectedRows, row.id),
                  })}
                  onClick={() =>
                    onItemClick
                      ? onItemClick()
                      : setSelectedRows(xor(selectedRows, [row.id]))
                  }
                >
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
      {footer && (
        <div className={styles.footer}>
          <Button type="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button disabled={size(selectedRows) === 0}>
            Add to the Watchlist
          </Button>
        </div>
      )}
    </div>
  );
};

export default HomeWatchlistFuturesModal;
