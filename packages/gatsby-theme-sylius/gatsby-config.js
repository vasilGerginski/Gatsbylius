module.exports = options => {
  return {
    plugins: [
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-smoothscroll`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: `gatsby-source-sylius`,
        options: {
          syliusUrl: options.syliusUrl,
          attributeDefinitions: options.attributeDefinitions,
        },
      },
      {
        resolve: `gatsby-transformer-sharp`,
        options: {
          useMozJpeg: false,
          stripMetadata: true,
          defaultQuality: 75,
        },
      },
      `gatsby-plugin-sharp`,
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
};
