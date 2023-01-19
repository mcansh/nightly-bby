import { style } from "@vanilla-extract/css";

export const container = style({
  padding: 20,
  margin: 20,
  border: "4px solid transparent",
  borderRadius: 4,
  background: `linear-gradient(white, white) padding-box, linear-gradient(to right, darkblue, darkorchid) border-box`,
});
