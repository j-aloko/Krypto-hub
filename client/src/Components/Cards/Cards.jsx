import React from "react";
import { data } from "../../../DummyData";
import styles from "../../Styles/Cards.module.css";
import Card from "../Card/Card";

function Cards() {
  return (
    <div className={styles.wrapper}>
      {data.map((d) => (
        <Card key={d.id} d={d} />
      ))}
    </div>
  );
}

export default Cards;
