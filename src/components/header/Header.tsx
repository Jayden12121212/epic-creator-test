import React from "react";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import Locale from "./Locale";
import cx from "classnames";

import { selectSession } from "@/selectors/userSelector";
import { useSelector } from "react-redux";
import { signIn, signOut } from "next-auth/react";

import styles from "./Header.module.scss";

type HeaderProps = {
  hasBorder?: boolean;
};

const Header = ({ hasBorder = true }: HeaderProps) => {
  const classes = cx(styles.header, {
    [styles.border]: hasBorder,
  });

  const isLoggedIn = useSelector(selectSession);

  const locales = [
    {
      label: "Deutsch",
      locale: "de",
    },
    {
      label: "Español (Spain)",
      locale: "es-ES",
    },
    {
      label: "Español (LA)",
      locale: "es-MX",
    },
    {
      label: "Français",
      locale: "fr",
    },
    {
      label: "Italiano",
      locale: "it",
    },
    {
      label: "日本語",
      locale: "ja",
    },
    {
      label: "한국어",
      locale: "ko",
    },
    {
      label: "Polski",
      locale: "pl",
    },
    {
      label: "Português (Brasil)",
      locale: "pt-BR",
    },
    {
      label: "Pусский",
      locale: "ru",
    },
    {
      label: "Türkçe",
      locale: "tr",
    },
  ];

  return (
    <header className={classes}>
      <Logo />
      <MenuLinks />

      <div className={styles.user}>
        {isLoggedIn && <span>{isLoggedIn.user.name}</span>}
        {isLoggedIn ? (
          <a onClick={() => signOut()}>Log out</a>
        ) : (
          <a onClick={() => signIn()}>Sign in</a>
        )}
      </div>

      <Locale locales={locales} />
    </header>
  );
};

export default Header;
