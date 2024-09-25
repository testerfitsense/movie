import React from "react";
import styles from "./index.module.css";
import Title from "../package-medium-text";

interface Props {
  heading: string[];
}

const TableHeading: React.FC<Props> = ({ heading }): React.JSX => {
  let main: React.JSX;

  if (heading.length > 0) {
    main = heading.map((item, index) => (
      <div key={`${index}-${item}`} className={styles.cell}>
        <Title text={item} />
      </div>
    ));
  }

  return <div className={styles.header}>{main}</div>;
};

export default TableHeading;
