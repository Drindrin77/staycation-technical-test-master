import classNames from "classnames";
import React from "react";

import styles from "./index.module.scss";

interface FlexProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  direction?: "vertical" | "horizontal";
  space?: "no-space" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
  align?: "center" | "start" | "end" | "baseline" | "stretch";
  justify?:
    | "start"
    | "center"
    | "space-around"
    | "space-between"
    | "end"
    | "stretch";
  grow?: boolean;
  wrap?: boolean;
  widthAuto?: boolean;
}

const Flex: React.FC<FlexProps> = ({
  children,
  direction = "horizontal",
  space = "m",
  justify,
  align,
  grow = false,
  wrap = false,
  widthAuto = false,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={classNames(
        styles.spaceContainer,
        styles[direction],
        styles[`size-${space}`],
        align && styles[`align-${align}`],
        justify && styles[`justify-${justify}`],
        rest.className,
        {
          [styles.grow]: grow,
          [styles.wrap]: wrap,
          [styles.widthAuto]: widthAuto,
        }
      )}
    >
      {children}
    </div>
  );
};

export default Flex;
