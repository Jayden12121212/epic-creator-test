import React from "react";
import svgs from "@/constants/svgs";
import styles from "./Locale.module.scss";

import { Icon } from "@jayden0000/epic-diesel-common";

type Locale = {
  label: string;
  locale: string;
};

type LocaleProps = {
  locales: Locale[];
};

const Locale = ({ locales }: LocaleProps) => {
  return (
    <div id="locale" className={styles.locale}>
      <div className={styles.icon} title="English">
        <Icon icon={svgs.SPHERE} size="xSmall" ariaLabel="Locale Icon" />
      </div>

      <ul>
        {locales.map((locale) => (
          <li key={`lang-${locale.locale}`} data-lang={locale.locale}>
            <a href="#">{locale.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Locale;
