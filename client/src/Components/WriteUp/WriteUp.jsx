import React from "react";
import styles from "../../Styles/WriteUp.module.css";

function WriteUp({ title, subTitle }) {
  return (
    <>
      <span className={styles.title}>{title}</span>
      <span className={styles.subTitle}>{subTitle}</span>
    </>
  );
}

export default WriteUp;
