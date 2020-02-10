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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsbylius`,
        short_name: `Gatsbylius`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `${__dirname}/src/images/gatsbylius-logo.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
};
