import React from "react";
import StaycationLogo from "ui/staycation-logo";

import styles from "./index.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className={styles.header}>
      <StaycationLogo className={styles.logo} />
      <div className={styles.user}>Welcome, Camille</div>
    </div>
  );
};

export default Header;
