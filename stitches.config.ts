import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

import { colors } from "@styles/colors";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors,

    radii: {
      xs: "2.5px",
      sm: "5px",
      md: "10px",
      lg: "20px",
      full: "99999px",
    },
  },

  media: {
    bp800: "(max-width: 800px)",
    bp700: "(max-width: 700px)",
    bp500: "(max-width: 500px)",
    bp400: "(max-width: 400px)",
  },
  utils: {
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});

type StitchesCssType = Stitches.CSS<typeof config>;

export type { StitchesCssType };
