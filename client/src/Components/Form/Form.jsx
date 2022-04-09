import React from "react";
import styles from "../../Styles/Form.module.css";

function Form() {
  return (
    <div className={styles.container}>
      <form>
        <input type="text" placeholder="Ethereum Address" />
        <input type="text" placeholder="Amount" />
        <input type="text" placeholder="test" />
        <input type="text" placeholder="Message" />
        <hr />
        <button className={styles.button}>Send Now</button>
      </form>
    </div>
  );
}

export default Form;
