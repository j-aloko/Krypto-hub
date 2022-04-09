import React from "react";
import styles from "../../Styles/Layer2.module.css";
import Cards from "../Cards/Cards";
import WriteUp from "../WriteUp/WriteUp";

function Layer2() {
  const title = "Services that we continue to improve";
  const subTitle =
    "The best choice for buying and selling your crypto assets with various super friendly services we offer";
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <WriteUp title={title} subTitle={subTitle} />
        </div>
        <div className={styles.right}>
          <Cards />
        </div>
      </div>
    </section>
  );
}

export default Layer2;
