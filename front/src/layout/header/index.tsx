import React from "react";
import StaycationLogo from "ui/staycation-logo";

import styles from "./index.module.scss";

interface HeaderProps {
  first_name: string;
}

const Header: React.FC<HeaderProps> = ({ first_name }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <StaycationLogo />
      </div>
      <div className={styles.user}>Welcome, {first_name}</div>
    </div>
  );
};

export default Header;
