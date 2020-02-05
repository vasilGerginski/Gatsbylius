const adaptCategory = originalCategory => {
  return {
    level: originalCategory.level,
    code: originalCategory.code,
    name: originalCategory.name,
    slug: originalCategory.slug,
    description: originalCategory.description,
    position: originalCategory.position,
    subcategories: originalCategory.children,
    parentCategory: originalCategory.parent,
    images: originalCategory.images,
    categoryImage:
      originalCategory.images.length > 0
        ? originalCategory.images[0].cachedPath
        : null,
  };
};

const adaptVariants = variants => {
  return Object.values(variants).map(({ name, price, code }) => {
    return {
      name: name,
      price: price,
      code: code,
    };
  });
};

const adaptAttribute = attribute => {
  return {
    [attribute.code]: attribute.value,
  };
};

const adaptProduct = ({ product, syliusUrl }) => {
  return {
    code: product.code,
    slug: product.slug,
    name: product.name,
    description: product.description,
    shortDescription: product.shortDescription,
    attributes: product.attributes.reduce(
      (acc, attribute) => ({
        ...acc,
        ...adaptAttribute(attribute),
      }),
      {}
    ),
    channelCode: product.channelCode,
    averageRating: product.averageRating,
    firstImage: product.images[0]
      ? `${syliusUrl}/media/image/${product.images[0].path}`
      : null,
    variants: adaptVariants(product.variants),
    taxons: product.taxons,
  };
};

module.exports = { adaptCategory, adaptProduct };
