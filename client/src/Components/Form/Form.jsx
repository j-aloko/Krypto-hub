import React, { useContext } from "react";
import { TransactionContext } from "../../Context/TransactionContext";
import styles from "../../Styles/Form.module.css";

function Form() {
  const { handleChange, sendTransaction } = useContext(TransactionContext);

  return (
    <div className={styles.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendTransaction();
        }}>
        <input
          type="text"
          name="addressTo"
          placeholder="Ethereum Address"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="keyword"
          placeholder="Keyword"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="message"
          placeholder="Message"
          onChange={handleChange}
          required
        />
        <hr />
        <button className={styles.button} type="submit">
          Send Now
        </button>
      </form>
    </div>
  );
}

export default Form;
