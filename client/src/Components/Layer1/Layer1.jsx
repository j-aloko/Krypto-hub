import React, { useContext } from "react";
import styles from "../../Styles/Layer1.module.css";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import EtherCard from "../EtherCard/EtherCard";
import Form from "../Form/Form";
import Pecs from "../Pecs/Pecs";
import WriteUp from "../WriteUp/WriteUp";
import { TransactionContext } from "../../Context/TransactionContext";

function Layer1() {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  const title = "Send Crypto across the world";

  const subTitle =
    "Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto-hub";

  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <WriteUp title={title} subTitle={subTitle} />
          {!currentAccount && <ConnectWallet connectWallet={connectWallet} />}
          <Pecs />
        </div>
        <div className={styles.right}>
          <EtherCard />
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Layer1;
