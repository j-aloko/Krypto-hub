import React from "react";
import styles from "../../Styles/Transaction.module.css";

function Transaction({ img }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.origin}>
          <span className={styles.from}>From</span>
          <span className={styles.address}>0x5fff6f5oe999</span>
        </div>
        <div className={styles.to}>
          <span className={styles.toName}>To</span>
          <span className={styles.toAddress}>0x5fff6f5oe999</span>
        </div>
        <div className={styles.amount}>
          <span className={styles.showAmount}>Amount</span>
          <span className={styles.amtOfEther}>0.001 ETH</span>
        </div>
        <p className={styles.message}>Hello there from jane doe</p>
      </div>
      <div className={styles.down}>
        <img src={img} alt="" className={styles.gif} />
        <div className={styles.button}>
          <button className={styles.timestamp}>12/22/2022, 8:25:22 PM</button>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
