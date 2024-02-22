import React from "react";
import styles from "@/styles/pages/404.module.scss";

import { Button } from "@jayden0000/epic-diesel-common";

const Error404 = () => {
  return (
    <>
      <div className={styles.component}>
        <span className={styles.character} />
        <div className={styles.statusText}>
          <p>404</p>
        </div>

        <div className={styles.content}>
          <div className={styles.messageWrapper}>
            <p className={styles.messageText}>
              Ack! We could not find the page you were looking for.
            </p>
          </div>
          <div className={styles.backButton}>
            <Button>Go Back</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
