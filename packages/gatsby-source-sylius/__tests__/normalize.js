const normalize = require("../normalize");

test("Normalize product", () => {
  expect(
    normalize.adaptProduct({
      product: apiProduct,
      syliusUrl: "https://api.gatsbylius.com",
    })
  ).toEqual({
    code: "touann_carheadlights",
    slug: "car-lights-and-stars",
    name: "Car lights and stars",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur ligula tincidunt risus pellentesque, nec faucibus eros egestas. Nulla malesuada luctus dui nec scelerisque. Integer nec rhoncus urna. Nulla lacinia mauris nec augue venenatis facilisis. Quisque at mi enim. Sed in rhoncus orci. Suspendisse ac nisl gravida, consequat elit quis, sollicitudin dolor. Morbi laoreet, arcu id fringilla viverra, magna mauris faucibus tellus, vitae pulvinar augue felis ac ligula.",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur ligula tincidunt risus pellentesque, nec faucibus eros egestas. Nulla malesuada luctus dui nec scelerisque.",
    attributes: {},
    channelCode: "default",
    averageRating: 0,
    firstImage:
      "https://api.gatsbylius.com/media/image/53/be/5264a42dbc11a1626c6d766db01a.jpeg",
    variants: [
      {
        code: "touann_carheadlights",
        name: undefined,
        axis: ["20cm", "red"],
        price: {
          currency: "USD",
          current: 1099,
        },
      },
    ],
    taxons: {
      main: "nature",
      others: ["prints", "nature"],
    },
  });
});

test("Normalize category", () => {
  expect(normalize.adaptCategory(apiCategory)).toEqual({
    level: 2,
    code: "cars",
    name: "Cars",
    slug: "category/cars",
    description: undefined,
    position: 0,
    subcategories: [],
    parentCategory: "prints",
    images: [
      {
        cachedPath:
          "https://api.gatsbylius.com/media/cache/sylius_shop_api/e8/85/2976387179150a3204b39dfea082.jpeg",
        path: "e8/85/2976387179150a3204b39dfea082.jpeg",
      },
    ],
    categoryImage:
      "https://api.gatsbylius.com/media/cache/sylius_shop_api/e8/85/2976387179150a3204b39dfea082.jpeg",
  });
});

const apiProduct = {
  code: "touann_carheadlights",
  name: "Car lights and stars",
  slug: "car-lights-and-stars",
  channelCode: "default",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur ligula tincidunt risus pellentesque, nec faucibus eros egestas. Nulla malesuada luctus dui nec scelerisque. Integer nec rhoncus urna. Nulla lacinia mauris nec augue venenatis facilisis. Quisque at mi enim. Sed in rhoncus orci. Suspendisse ac nisl gravida, consequat elit quis, sollicitudin dolor. Morbi laoreet, arcu id fringilla viverra, magna mauris faucibus tellus, vitae pulvinar augue felis ac ligula.",
  shortDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur ligula tincidunt risus pellentesque, nec faucibus eros egestas. Nulla malesuada luctus dui nec scelerisque.",
  averageRating: 0,
  taxons: {
    main: "nature",
    others: ["prints", "nature"],
  },
  variants: {
    touann_carheadlights: {
      code: "touann_carheadlights",
      axis: ["20cm", "red"],
      nameAxis: {
        "20cm": "Size 20cm",
        red: "Color Red",
      },
      price: {
        current: 1099,
        currency: "USD",
      },
      images: [],
    },
  },
  attributes: [],
  associations: [],
  images: [
    {
      code: "main",
      path: "53/be/5264a42dbc11a1626c6d766db01a.jpeg",
      cachedPath:
        "https://api.gatsbylius.com/media/cache/sylius_shop_api/53/be/5264a42dbc11a1626c6d766db01a.jpeg",
    },
  ],
  _links: {
    self: {
      href: "/shop-api/products/by-slug/car-lights-and-stars",
    },
  },
};

const apiCategory = {
  level: 2,
  code: "cars",
  name: "Cars",
  parent: "prints",
  slug: "category/cars",
  position: 0,
  children: [],
  images: [
    {
      path: "e8/85/2976387179150a3204b39dfea082.jpeg",
      cachedPath:
        "https://api.gatsbylius.com/media/cache/sylius_shop_api/e8/85/2976387179150a3204b39dfea082.jpeg",
    },
  ],
};
