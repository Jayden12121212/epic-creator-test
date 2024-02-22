import React from "react";
import cx from "classnames";
import svgs from "@/constants/svgs";
import styles from "./LoadIndicator.module.scss";

import { Icon } from "@jayden0000/epic-diesel-common";

type LoadIndicatorProps = {
  children: React.ReactNode;
  className?: string;
  isLoading: boolean;
  message?: string;
};

const LoadIndicator = ({
  children,
  className,
  isLoading,
  message = "Loading",
}: LoadIndicatorProps) => {
  const classes = cx({ [styles.isLoading]: isLoading });

  return (
    <>
      {isLoading && (
        <div className={styles.loader}>
          <Icon
            className={styles.icon}
            icon={svgs.LOADING}
            size="large"
            ariaLabel="Loading Icon"
          />
          <div className={styles.text}>
            <h3>{message}...</h3>
          </div>
        </div>
      )}
      <div className={classes}>{children}</div>
    </>
  );
};

export default LoadIndicator;
