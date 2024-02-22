// @ts-nocheck

import React, { Component } from "react";
import Cookies from "universal-cookie";
import styles from "./Disclaimer.module.scss";
import { Button } from "@jayden0000/epic-diesel-common";

type DisclaimerProps = {
  theme?: string;
  isLoading?: boolean;
  maxAge?: number;
  cookieName?: string;
};

type DisclaimerState = {
  show: boolean;
};

class Disclaimer extends Component<DisclaimerProps, DisclaimerState> {
  static defaultProps = {
    theme: "fortnite",
    isLoading: false,
    maxAge: 60 * 60 * 24 * 7,
    cookieName: "_AFFILIATE_DISCLAIMER",
  };

  constructor(props: DisclaimerProps) {
    super(props);
    this.state = {
      show: false,
    };
  }

  shouldDisclaim = (): boolean => {
    const { cookieName } = this.props;
    const cookies = new Cookies();
    return !cookies.get(cookieName);
  };

  setCookie = () => {
    const { maxAge, cookieName } = this.props;
    const cookies = new Cookies();
    cookies.set(cookieName, true, { maxAge });
  };

  confirm = () => {
    this.setCookie();
    this.setState({
      show: false,
    });
  };

  componentDidMount() {
    if (this.shouldDisclaim()) {
      this.setState({
        show: true,
      });
    }
  }

  render() {
    const { theme } = this.props;
    const { show } = this.state;

    if (!show) return null;

    return (
      <div className={`${styles.overlay} ${styles[theme]}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <p>Welcome In Creator!</p>
            <h1>Earning Data Is Confidential</h1>
            <p>
              You are about to view confidential earning data. This data is
              confidential and should not be shared with anyone. By clicking
              "Confirm" you agree to keep this data confidential and not share
              it with anyone.
            </p>
            <div className={styles.button}>
              <Button onClick={this.confirm}>
                <div>
                  <span>Confirm</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Disclaimer;
