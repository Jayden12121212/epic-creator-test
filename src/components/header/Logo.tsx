import React from "react";
import Link from "next/link";
import svgs from "@/constants/svgs";
import styles from "./Logo.module.scss";

import { Icon } from "@jayden0000/epic-diesel-common";

const Logo = () => {
  return (
    <div className={styles.logoHeader}>
      <Link className={styles.logoLink} href="https://www.epicgames.com">
        <Icon icon={svgs.EPIC} size="large" ariaLabel="Epic Games Icon" />
      </Link>

      <span className={styles.advocateTitle}>Epic Creator</span>
    </div>
  );
};

export default Logo;
