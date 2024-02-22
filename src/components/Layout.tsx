import React from "react";
import localFont from "next/font/local";
import cx from "classnames";

import { useRouter } from "next/router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Header } from "@/components";

import styles from "./Layout.module.scss";

const BrutalType = localFont({
  src: [
    {
      path: "../../public/fonts/Brutal-100.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Brutal-200.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Brutal-300.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Brutal-400.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Brutal-500.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Brutal-700.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Brutal-800.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Brutal-900.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const appClasses = cx(styles.app, BrutalType.className);
  const router = useRouter();
  const uniqueKey = router.asPath;
  const shouldRenderHeader =
    router.asPath !== "/" && router.asPath !== "/signup";
  const timeout = {
    enter: 1000,
    exit: 0,
  };

  return (
    <div className={appClasses}>
      <div className={styles.container}>
        <TransitionGroup>
          <CSSTransition
            key={uniqueKey}
            timeout={timeout}
            classNames={{
              enter: styles.fadeEnter,
              enterActive: styles.fadeEnterActive,
              exit: styles.fadeExit,
              exitActive: styles.fadeExitActive,
            }}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <section>
              {shouldRenderHeader && <Header />}
              {children}
            </section>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Layout;
