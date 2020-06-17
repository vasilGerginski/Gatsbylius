const getAllTaxons = taxons => {
  let mainAndOtherToxons = taxons.main ? [taxons.main] : [];

  if (taxons.others) {
    mainAndOtherToxons = mainAndOtherToxons.concat(taxons.others);
  }

  return mainAndOtherToxons;
};

module.exports = ({ node, getNode, createNodeId, createNodeField }) => {
  if (
    node &&
    node.internal &&
    node.internal.type === "Product" &&
    node.taxons
  ) {
    const taxons = getAllTaxons(node.taxons);

    for (const taxon of taxons) {
      const categoryNode = getNode(createNodeId(`category-${taxon}`));

      let categoryNodeValue = [node.code];

      if (categoryNode && categoryNode.fields && categoryNode.fields.products) {
        categoryNodeValue = [
          ...categoryNode.fields.products,
          ...categoryNodeValue,
        ];
      }

      createNodeField({
        node: categoryNode,
        name: "products",
        value: categoryNodeValue,
      });
    }
  }
};
