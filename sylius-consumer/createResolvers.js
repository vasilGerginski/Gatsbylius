module.exports = ({ createNodeId, createResolvers, getNode }) => {
  createResolvers({
    Category: {
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
        type: "[Product]!",
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
