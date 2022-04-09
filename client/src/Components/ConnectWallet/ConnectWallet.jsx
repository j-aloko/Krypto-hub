import React from "react";
import styles from "../../Styles/ConnectWallet.module.css";

function ConnectWallet({ connectWallet }) {
  return (
    <>
      <button className={styles.button} onClick={connectWallet}>
        Connect Wallet
      </button>
    </>
  );
}

export default ConnectWallet;
