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
    ],
  };
};
