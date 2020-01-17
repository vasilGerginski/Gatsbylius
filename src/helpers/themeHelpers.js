export const fontFamily = key => ({ theme }) =>
  `font-family: ${theme.typography.families[key]};`;

export const color = key => ({ theme }) => theme.colors[key];

export const spacing = sizes => ({ theme }) =>
  sizes
    .map(size => `${theme.spaces[size]}${size === "none" ? "" : "rem"}`)
    .join(" ");
