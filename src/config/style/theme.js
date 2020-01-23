const baseFontSize = 1; // in em = 100%
const lineHeight = 1.5;

const palette = {
  white: "#fff",
  black: "#222",
  greenSylius: "#0fbf9c",
  greenSyliusLight: "#06D8AE",
  purpleGatsby: "#663399",
  sandLight: "#fcf9f4",
  greyLight: "#fbfbfb",
  greyLight1: "#efefef",
  greyMedium: "#898989",
  greyDark: "#242428",
};

export default {
  typography: {
    families: {
      titleFont: "Montserrat, sans-serif",
      bodyFont: "Montserrat, sans-serif",
    },
    baseFontSize,
    lineHeight,
  },
  spaces: {
    none: 0,
    xs: lineHeight / 2,
    sm: lineHeight,
    md: lineHeight * 1.5,
    lg: lineHeight * 2,
    xl: lineHeight * 4,
  },
  colors: {
    text: palette.greyDark,
    background: palette.sandLight,
    primary: palette.greenSylius,
    primaryLight: palette.greenSyliusLight,
    secondary: palette.purpleGatsby,
    white: palette.white,
    black: palette.black,
    greyLight: palette.greyLight,
    greyLight1: palette.greyLight1,
    greyMedium: palette.greyMedium,
    greyDark: palette.greyDark,
  },
  boxShadows: {
    light: "0 0 6px rgba(36, 36, 36, 0.2)",
    textMedium: "2px 2px 10px rgba(36, 36, 36, 0.6)",
  },
};
