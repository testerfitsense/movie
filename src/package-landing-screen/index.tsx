import { useState, useEffect } from "react";
import Table from "../package-table";
import TableHeading from "../package-table-heading";
import Title from "../package-large-text";
import { Expense } from "../package-types";
import styles from "./index.module.css";
import MediumText from "../package-medium-text";
import { URL } from "../package-config";

const tableHeading: string[] = [
  "date",
  "merchant",
  "amount",
  "category",
  "description",
  "status",
];

const App = (): React.JSX => {
  const [error, setErrorMessage] = useState<string>("");
  const [expenses, setExpenses] = useState<IDataModel[]>([]);

  let content: React.JSX = <p className={styles.centre}>Loading...</p>;

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(URL, {
          headers: {
            "Content-Type": "application/json",
            Username: "subram.gurung",
          },
        });

        const result = (await response.json()) as Expense[];
        if (response.ok) {
          if (result.length > 0) {
            setExpenses(result);
          } else {
            throw "Error";
          }
        } else {
          throw "Error";
        }
      };

      fetchData();
    } catch (e) {
      // Handle error...
      setErrorMessage("Something went wrong...");
    }
  }, []);

  if (expenses.length > 0) {
    content = <Table data={expenses} />;
  } else if (error) {
    content = (
      <div className={styles.centre}>
        <MediumText text={error} />
      </div>
    );
  }

  return (
    <div id="template-text" className={styles.table}>
      <div className={styles.inner_container}>
        <div className={styles.main_title__container}>
          <Title text="expenses" />
        </div>

        <div className={styles.heading_container}>
          <TableHeading heading={tableHeading} />
        </div>

        {content}
      </div>
    </div>
  );
};

export default App;
