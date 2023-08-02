import { ElementType, HTMLAttributes } from "react";

export type TextVariant =
  | "txtXLG"
  | "txtLG"
  | "txtMD"
  | "txtSM"
  | "txtHeading"
  | "txtSubheading"
  | "txtBody"
  | "txtSubtitle"
  | "txtCaption";

export type TextSize = "lg" | "sm";

export interface DefaultTextProps {
  as?: TextProps["as"];
}

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  color?: string;
  variant?: TextVariant;
  size?: TextSize;
  as?: ElementType;
}

export interface TextMixinTheme {
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
}

export interface TextMixinVariant {
  txtXLG: TextMixinTheme;
  txtLG: TextMixinTheme;
  txtMD: TextMixinTheme;
  txtSM: TextMixinTheme;
  txtHeading: TextMixinTheme;
  txtSubheading: TextMixinTheme;
  txtBody: TextMixinTheme;
  txtSubtitle: TextMixinTheme;
  txtCaption: TextMixinTheme;
}

export interface TextMixin {
  lg: TextMixinVariant;
  sm: TextMixinVariant;
}
