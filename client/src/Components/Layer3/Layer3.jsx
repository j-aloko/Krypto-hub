import React, { useContext } from "react";
import { TransactionContext } from "../../Context/TransactionContext";
import styles from "../../Styles/Layer3.module.css";
import Layer3Layout from "../Layer3Layout/Layer3Layout";
import Transactions from "../Transactions/Transactions";

function Layer3() {
  const { currentAccount } = useContext(TransactionContext);
  return (
    <Layer3Layout>
      {currentAccount ? (
        <>
          (<h1 className={styles.title}>Latest Transactions</h1>
          <Transactions />)
        </>
      ) : (
        <h1 className={styles.title}>
          Connect Your Account to See The Latest Transactions
        </h1>
      )}
    </Layer3Layout>
  );
}

export default Layer3;
