import React, { useContext } from "react";
import styles from "../../Styles/EtherCard.module.css";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";
import { TransactionContext } from "../../Context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";

function EtherCard() {
  const { currentAccount } = useContext(TransactionContext);

  const shorten_Address = shortenAddress(currentAccount);

  return (
    <div className={styles.container}>
      <div className={styles.warningWrapper}>
        <ReportGmailerrorredRoundedIcon />
      </div>
      <div className={styles.circleEther}>
        <img src="/images/ethereum.png" alt="" className={styles.icon} />
      </div>
      <div className={styles.addressWrapper}>
        <span className={styles.etherAddress}>{shorten_Address}</span>
        <h3 className={styles.etherTitle}>Ethereum</h3>
      </div>
    </div>
  );
}

export default EtherCard;
