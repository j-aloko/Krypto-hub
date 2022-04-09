import React from "react";
import styles from "../../Styles/EtherCard.module.css";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";

function EtherCard() {
  return (
    <div className={styles.container}>
      <div className={styles.warningWrapper}>
        <ReportGmailerrorredRoundedIcon />
      </div>
      <div className={styles.circleEther}>
        <img src="/images/ethereum.png" alt="" className={styles.icon} />
      </div>
      <div className={styles.addressWrapper}>
        <span className={styles.etherAddress}>0x269fffffh88d9s8ss99s9</span>
        <h3 className={styles.etherTitle}>Ethereum</h3>
      </div>
    </div>
  );
}

export default EtherCard;
