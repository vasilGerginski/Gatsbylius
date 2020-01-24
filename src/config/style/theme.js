const baseFontSize = 1; // in em = 100%
const lineHeight = 1.5;

const palette = {
  white: "#fff",
  black: "#222",
  greenSylius: "#0fbf9c",
  greenSyliusLight: "#06D8AE",
  purpleGatsby: "#663399",
  sandLight: "#fcf9f4",
  info1: "#71b6ef",
  info2: "#0095F8",
  deepBlue1: "#0077E2",
  deepBlue2: "#0063BC",
  greyLight: "#fbfbfb",
  greyDisable: "#E4EAEE",
  greyAlto: "#DDE3E8",
  greyMiddle1: "#a0a9aE",
  greyMiddle2: "#646e74",
  greySemiDark: "#788995",
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
    info1: palette.info1,
    info2: palette.info2,
    deepBlue1: palette.deepBlue1,
    deepBlue2: palette.deepBlue2,
    white: palette.white,
    black: palette.black,
    greyLight: palette.greyLight,
    greyDisable: palette.greyDisable,
    greyAlto: palette.greyAlto,
    greyMiddle1: palette.greyMiddle1,
    greyMiddle2: palette.greyMiddle2,
    greySemiDark: palette.greySemiDark,
    greyLight1: palette.greyLight1,
    greyMedium: palette.greyMedium,
    greyDark: palette.greyDark,
  },
  boxShadows: {
    light: "0 0 6px rgba(36, 36, 36, 0.2)",
    textMedium: "2px 2px 10px rgba(36, 36, 36, 0.6)",
  },
};
