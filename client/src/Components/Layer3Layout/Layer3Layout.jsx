import React from "react";
import styles from "../../Styles/Layer3Layout.module.css";

function Layer3Layout({ children }) {
  return <div className={styles.layout}>{children}</div>;
}

export default Layer3Layout;
