import React, { useMemo, useState } from "react";
import { useRouter } from "next/router";
import { Icon } from "@jayden0000/epic-diesel-common";

import Link from "next/link";
import svgs from "@/constants/svgs";
import getRoutes from "@/routes/getRoutes";
import cx from "classnames";

import { useSelector } from "react-redux";
import { selectSession } from "@/selectors/userSelector";
import { selectAffiliateIsActive } from "@/selectors/InfluencerSelector";

import styles from "./MenuLinks.module.scss";

type MenuLinksProps = {};

const MenuLinks = ({}: MenuLinksProps) => {
  const [toggled, toggleMenu] = useState(false);

  const { routes } = useMemo(() => getRoutes(), []);
  const classes = cx(styles.container, { [styles.menuActive]: toggled });
  const router = useRouter();
  const isActive = (path: string) => {
    return router.pathname === path;
  };
  const session = useSelector(selectSession);
  const isAffiliateActive = useSelector(selectAffiliateIsActive);

  return (
    <>
      <div className={classes}>
        <div className={styles.menuControl}>
          {session && isAffiliateActive && (
            <button onClick={() => toggleMenu(!toggled)}>
              <Icon
                icon={svgs.CHEVRON_DOWN}
                size="xSmall"
                ariaLabel="Menu Links Icon"
              />
            </button>
          )}
        </div>
        <div className={styles.menuLinks}>
          {session &&
            isAffiliateActive &&
            routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cx(styles.link, {
                  [styles.active]: isActive(route.path),
                })}
              >
                <span className={styles.linkContent}>{route.label}</span>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default MenuLinks;
