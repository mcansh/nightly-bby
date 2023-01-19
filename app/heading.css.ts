import { style } from "@vanilla-extract/css";

export const gradientText = style({
  background: `linear-gradient(to right, #ee33aa, rgb(79 70 229 / 1))`,
  fontSize: 36,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontFamily: "comic sans ms",
});
