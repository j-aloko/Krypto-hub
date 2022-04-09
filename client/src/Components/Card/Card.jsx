import React from "react";
import styles from "../../Styles/Card.module.css";

function Card({ d }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img src={d.icon} alt="" className={styles.icon} />
        </div>
        <div className={styles.right}>
          <span className={styles.title}>{d.title}</span>
          <span className={styles.description}>{d.desc}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
