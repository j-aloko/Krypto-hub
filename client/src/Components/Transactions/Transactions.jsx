import React, { useContext } from "react";
import { TransactionContext } from "../../Context/TransactionContext";
import styles from "../../Styles/Transactions.module.css";
import Transaction from "../Transaction/Transaction";

function Transactions() {
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  const images = [
    "https://c.tenor.com/gI1CoSP-3R8AAAAd/front.gif",
    "https://c.tenor.com/soWJduUFlq8AAAAd/back-end-sushi.gif",
    "https://c.tenor.com/2rm6zUADvlgAAAAd/dog-serious.gif",
    "https://c.tenor.com/ezwbMW4cLJkAAAAd/hold-backend.gif",
    "https://c.tenor.com/5awEIoceXdsAAAAd/hold-the-line-theline.gif",
    "https://c.tenor.com/4RxpgANEJkcAAAAC/leonidas-300.gif",
  ];
  return (
    <div className={styles.wrapper}>
      {images.map((img, index) => (
        <Transaction key={index} img={img} />
      ))}
    </div>
  );
}

export default Transactions;
