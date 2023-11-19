import React from "react";

import styles from "./index.module.scss";

interface ContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

export default Content;
