import React from "react";
import styles from "./index.module.css";
import { Expense } from "../package-types";
import { formatCurrency, getMonth } from "./internals";

interface Props {
  data: Expense[];
}

const Table: React.FC<Props> = ({ data }): React.JSX => {
  const main = data.map((item) => {
    const date = new Date(item.date);
    const fromattedDate = `${getMonth(date.getMonth())} ${date.getDate()}`;

    return (
      <div className={styles.row} key={`${item.id}-${item.amount}`}>
        <span className={styles.cell}>{fromattedDate}</span>
        <span className={styles.cell}>{item.merchant}</span>
        <span className={styles.cell}>{formatCurrency(item.amount)}</span>
        <span className={styles.cell}>{item.category}</span>
        <span className={styles.cell}>{item.description}</span>
        <span className={styles.cell}>{item.status}</span>
      </div>
    );
  });

  return main;
};

export default Table;
