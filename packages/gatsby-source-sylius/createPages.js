const path = require("path");

module.exports = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("src/templates/product.js");
  const categoryTemplate = path.resolve("src/templates/category.js");

  return graphql(
    `
      query loadDataQuery {
        allProduct {
          nodes {
            code
            slug
            taxons {
              main
            }
          }
        }
        allCategory {
          edges {
            node {
              id
              code
              slug
              products {
                id
                name
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }
    result.data.allCategory.edges.forEach(({ node }) => {
      createPage({
        path: `/categories/${node.code}`,
        component: categoryTemplate,
        context: {
          code: node.code
        }
      });
    });
    result.data.allProduct.nodes.forEach(node => {
      createPage({
        path: `/product/${node.slug}`,
        component: blogPostTemplate,
        context: {
          slug: node.slug,
          mainProductTaxon: node.taxons.main
        }
      });
    });
  });
};
