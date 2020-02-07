const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

module.exports = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
  getNode,
}) => {
  const { createNode } = actions;

  createResolvers({
    Product: {
      localImage: {
        resolve: source =>
          createRemoteFileNode({
            url: source.firstImage,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          }),
      },
    },
    Category: {
      localImage: {
        resolve: source =>
          createRemoteFileNode({
            url: source.categoryImage,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          }),
      },
      parent: {
        resolve: source =>
          getNode(createNodeId(`category-${source.parentCategory}`)),
      },
      children: {
        resolve: source =>
          source.subcategories.map(categoryCode =>
            getNode(createNodeId(`category-${categoryCode}`))
          ),
      },
      products: {
        resolve: (source, _, context) =>
          source.fields && source.fields.products
            ? source.fields.products.map(productCode =>
                context.nodeModel.getNodeById({
                  id: createNodeId(`product-${productCode}`),
                })
              )
            : [],
      },
    },
  });
};
