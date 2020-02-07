require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: "/gatsbylius",
  siteMetadata: {
    title: `Gatsbylius`,
    description: `The fastest Open Source storefront for Sylius.`,
    author: `@gatsbylius`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-sylius`,
      options: {
        syliusUrl: process.env.GATSBY_SYLIUS_URL,
        attributeDefinitions: `
          type Attributes {
            photographer: String
            unsplash_url: String
          }
        `,
      },
    },
  ],
};
