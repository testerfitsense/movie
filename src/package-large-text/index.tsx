import React from "react";
import styles from "./index.module.css";

interface Props {
  text: string;
}

const LargeText: React.FC<Props> = ({ text }): React.JSX => (
  <p className={styles.text}>{text}</p>
);

export default LargeText;
