const baseFontSize = 1; // in em = 100%
const lineHeight = 1.5;

// colors by name
const palette = {
  white: "#fff",
  black: "#222",
  greenSyliusDark: "#0B8E74",
  greenSylius: "#0fbf9c",
  greenSyliusLight: "#06D8AE",
  purpleGatsby: "#663399",
  sandLight: "#fcf9f4",
  softBlue: "#71b6ef",
  blue: "#0095F8",
  deepBlue1: "#0077E2",
  deepBlue2: "#0063BC",
  greyLight: "#fbfbfb",
  greyLight1: "#efefef",
  greyDisable: "#E4EAEE",
  greyAlto: "#DDE3E8",
  greyMiddle1: "#a0a9aE",
  greyMiddle2: "#646e74",
  greySemiDark: "#788995",
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
    primaryDark: palette.greenSyliusDark,
    primary: palette.greenSylius,
    primaryLight: palette.greenSyliusLight,
    secondary: palette.deepBlue1,
    info1: palette.softBlue,
    info2: palette.blue,
    ...palette,
  },
  boxShadows: {
    light: "0 0 6px rgba(36, 36, 36, 0.2)",
    textMedium: "2px 2px 10px rgba(36, 36, 36, 0.6)",
  },
};
