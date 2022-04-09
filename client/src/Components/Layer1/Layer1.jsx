import React from "react";
import styles from "../../Styles/Layer1.module.css";
import EtherCard from "../EtherCard/EtherCard";
import Form from "../Form/Form";
import Pecs from "../Pecs/Pecs";
import WriteUp from "../WriteUp/WriteUp";

function Layer1() {
  const title = "Send Crypto across the world";
  const subTitle =
    "Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto-hub";
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <WriteUp title={title} subTitle={subTitle} />
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
