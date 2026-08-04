import { useState } from "react";

import styles from "./HeroLetter.module.css";

export default function HeroLetter() {
  const [opened, setOpened] = useState(false);


  return (
    <div className={styles.container}>
      <div className={`${styles.envelopeWrapper} ${opened ? styles.opened : ""}`}>
        <div className={styles.envelope}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              Welcome!
              <br />
              Thanks for
              <br />
              visiting!
            </div>
          </div>
        </div>
        <div className={styles.front}></div>
      </div>
    </div>
  );
}