import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "../../Styles/Footer.module.css";

function Footer() {
  const [isFooter, setIsFooter] = useState(false);

  useEffect(() => {
    setIsFooter(true);
  }, []);

  return (
    <footer>
      <Navbar isFooter={isFooter} />
      <div className={styles.textWrapper}>
        <span className={styles.text}>
          Come join us and hear the unexpected miracle
        </span>
        <span className="contact">info@krypto-hub.com</span>
      </div>
      <hr />
      <ul className={styles.rights}>
        <li className={styles.item}>@krypto-hub2022</li>
        <li className={styles.item}>All rights reserved</li>
      </ul>
    </footer>
  );
}

export default Footer;
