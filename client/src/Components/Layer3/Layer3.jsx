import React from "react";
import styles from "../../Styles/Layer3.module.css";
import Layer3Layout from "../Layer3Layout/Layer3Layout";
import Transactions from "../Transactions/Transactions";

function Layer3() {
  return (
    <Layer3Layout>
      <h1 className={styles.title}>Latest Transactions</h1>
      <Transactions />
    </Layer3Layout>
  );
}

export default Layer3;
