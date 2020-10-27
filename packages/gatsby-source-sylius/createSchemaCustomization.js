module.exports = ({ actions }, options) => {
  const { createTypes } = actions;

  const typeDefs = `
    ${options.attributeDefinitions || ""}

    type Taxons {
      main: String
      others: [String]
    }

    type Price {
      currency: String!
      current: Int!
    }

    type Variant {
      name: String,
      price: Price!,
      code: String!,
      axis: [String]!
    }

    type Product implements Node @dontInfer {
      code: String!
      slug: String!
      name: String!
      description: String
      shortDescription: String
      metaDescription: String
      channelCode: String!
      averageRating: Int!
      localImage: File
      taxons: Taxons
      ${options.attributeDefinitions ? "attributes: Attributes" : ""}
      variants: [Variant]!
    }

    type Category implements Node @dontInfer {
      code: String!
      slug: String!
      name: String!
      description: String
      position: Int
      subcategories: [Category]!
      parentCategory: Category
      products: [Product]!
      level: Int!
      localImage: File
    }
  `;

  createTypes(typeDefs);
};
