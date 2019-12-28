const baseUnit = 1;
const baseFontSize = 1.125;
const modularScale = 1.3;
const palette = {
  white: "#fff",
  black: "#222",
  greenSylius: "#0fbf9c",
  purpleGatsby: "#663399",
  greyLight: "#fbfbfb",
  greyDark: "#242428",
};

export default {
  fonts: {
    font1: '"Roboto", sans-serif',
    font2: '"Montserrat", sans-serif',
  },
  fontSizes: {
    small: `${(baseFontSize / modularScale).toFixed(2)}rem`,
    body: `${baseFontSize}rem`,
    h3: `${(baseFontSize * modularScale).toFixed(2)}rem`,
    h2: `${(baseFontSize * Math.pow(modularScale, 2)).toFixed(2)}rem`,
    h1: `${(baseFontSize * Math.pow(modularScale, 3)).toFixed(2)}rem`,
  },
  spaces: [
    `${baseUnit / 2}rem`,
    `${baseUnit}rem`,
    `${baseUnit * 2}rem`,
    `${baseUnit * 4}rem`,
  ],
  colors: {
    text: palette.greyDark,
    background: palette.greyLight,
    primary: palette.greenSylius,
    secondary: palette.purpleGatsby,
    white: palette.white,
    black: palette.black,
  },
};
