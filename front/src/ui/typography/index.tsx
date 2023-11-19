import { Typography as AntdTypography } from "antd";
import { ParagraphProps as AntdParagraphProps } from "antd/es/typography/Paragraph";
import { TitleProps as AntdTitleProps } from "antd/es/typography/Title";
import { TypographyProps } from "antd/es/typography/Typography";
import classNames from "classnames";

import styles from "./index.module.scss";

const { Title: AntdTitle, Paragraph: AntdParagraph } = AntdTypography;

function Typography(props: TypographyProps<"p">) {
  return <AntdTypography {...props} />;
}

interface CommonProps {
  alternativeColor?: "primary" | "secondary";
  whiteSpace?: "nowrap" | "break-spaces" | "pre-line" | "normal";
  uppercase?: boolean;
  theme?: "dark" | "light" | "success";
  contextualColor?: boolean;
  textAlign?: "center" | "justify" | "left" | "right";
}

export interface TitleProps extends AntdTitleProps, CommonProps {}

function Title({
  alternativeColor,
  contextualColor = false,
  textAlign = "left",
  theme = "light",
  uppercase = false,
  whiteSpace = "normal",
  ...rest
}: TitleProps) {
  return (
    <AntdTitle
      {...rest}
      className={classNames(
        {
          [styles.primary]: alternativeColor === "primary",
          [styles.secondary]: alternativeColor === "secondary",
          [styles.contextualColor]: contextualColor,
          [styles.uppercase]: uppercase,
        },
        styles[theme],
        styles[whiteSpace],
        styles[`text-align-${textAlign}`],
        styles.title,
        rest.className
      )}
    />
  );
}

export interface ParagraphProps extends AntdParagraphProps, CommonProps {
  alternativeColor?: "primary" | "secondary";
  weight?: "bold" | "semi-bold" | "normal";
  contextualColor?: boolean;
  lineHeight?: "default" | "normal";
  size?: "xxs" | "xs" | "s" | "m" | "l";
  soften?: boolean;
  theme?: "dark" | "light" | "success";
  uppercase?: boolean;
}

function Paragraph({
  alternativeColor,
  weight = "normal",
  contextualColor = false,
  children,
  lineHeight = "default",
  size = "m",
  soften,
  theme = "light",
  uppercase = false,
  whiteSpace = "normal",
  textAlign = "left",
  ...rest
}: ParagraphProps) {
  return (
    <AntdParagraph
      {...rest}
      className={classNames(
        {
          [styles.soften]: soften,
          [styles.primary]: alternativeColor === "primary",
          [styles.secondary]: alternativeColor === "secondary",
          [styles.contextualColor]: contextualColor,
          [styles.uppercase]: uppercase,
        },
        styles[`size-${size}`],
        styles[`line-height-${lineHeight}`],
        styles[`weight-${weight}`],
        styles[`text-align-${textAlign}`],
        styles[theme],
        rest.className
      )}
    >
      <p className={classNames(styles.p, styles[whiteSpace])}>{children}</p>
    </AntdParagraph>
  );
}

Typography.Paragraph = Paragraph;
Typography.Title = Title;

export default Typography;
