const localeMapping = {
  EUR: "€",
  USD: "$",
};

export const priceParser = (centsPrice, locale) => {
  return `${centsPrice / 100} ${localeMapping[locale]}`;
};