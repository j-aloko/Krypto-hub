import React from "react";
import styles from "../../Styles/Navbar.module.css";

function Navbar({ isFooter }) {
  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.logo}>KRYPTO-HUB</div>
        </div>
        <div className={styles.right}>
          <nav>
            <ul>
              <li className={styles.item}>Market</li>
              <li className={styles.item}>Exchange</li>
              <li className={styles.item}>Tutorials</li>
              <li className={styles.item}>Wallets</li>
              {!isFooter && (
                <li className={styles.item}>
                  <button className={styles.login}>Login</button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
