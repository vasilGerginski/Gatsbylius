module.exports = ({ reporter }, options) => {
  if (!options.url) {
    reporter.panic(
      "Problems with gatsby-source-sylius options: url is mandatory"
    );
  }
};
