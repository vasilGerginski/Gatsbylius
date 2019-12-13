const axios = require("axios");

const SYLIUS_URL = process.env.GATSBY_SYLIUS_URL;

const localeMapping = {
  EUR: "€",
  USD: "$",
};

export const priceParser = (centsPrice, locale) => {
  return `${centsPrice / 100} ${localeMapping[locale]}`;
};

export const ensureCartKey = async (storeState, storeDispatch) => {
  if (!storeState.cartKey) {
    await axios
      .post(`${SYLIUS_URL}/shop-api/carts`, {})
      .then(response => {
        console.log("cartLEUEEUZUF");
        storeDispatch({
          type: "updateCartKey",
          payload: response.data.tokenValue,
        });
        storeState.cartKey = response.data.tokenValue;
      })
      .catch(error => {
        console.log("Error on cart creation ", error);
      });
  }
};

export const addVariantToCart = async (
  productCode,
  variantsCode,
  qty,
  isSimple,
  storeState,
  storeDispatch
) => {
  await ensureCartKey(storeState, storeDispatch);
  const cartKey = storeState.cartKey;

  const productData = {
    productCode: productCode,
    quantity: qty,
  };

  if (!isSimple) {
    productData.variantCode = variantsCode;
  }

  await axios
    .post(`${SYLIUS_URL}/shop-api/carts/${cartKey}/items`, productData)
    .then(response => {
      storeDispatch({ type: "updateProducts", payload: response.data.items });
    })
    .catch(err => {
      console.log("Error on add to cart", err);
    });
};

export const changeItemQty = async (
  itemId,
  changeType,
  storeState,
  storeDispatch
) => {
  const cartKey = storeState.cartKey;

  const item = storeState.products.find(item => item.id === itemId);
  let newItemQty;

  if (changeType === "increment") {
    newItemQty = item.quantity + 1;
  } else if (changeType === "decrement" && item.quantity > 0) {
    newItemQty = item.quantity - 1;
  }

  if (!newItemQty) {
    return null;
  }

  await axios
    .put(`${SYLIUS_URL}/shop-api/carts/${cartKey}/items/${item.id}`, {
      quantity: newItemQty,
    })
    .then(response => {
      storeDispatch({ type: "updateProducts", payload: response.data.items });
    })
    .catch(error => {
      console.error("Error on change qty item", error);
    });
};

export const removeItemFromCart = async (itemId, storeState, storeDispatch) => {
  const cartKey = storeState.cartKey;
  await axios
    .delete(`${SYLIUS_URL}/shop-api/carts/${cartKey}/items/${itemId}`)
    .then(async response => {
      //@todo: update totals ?
      storeDispatch({ type: "updateProducts", payload: response.data.items });
    })
    .catch(error => {
      console.error("Error on remove item from cart", error);
    });
};

export const dropCart = async (storeState, storeDispatch) => {
  const cartKey = storeState.cartKey;

  await axios
    .delete(`${SYLIUS_URL}/shop-api/carts/${cartKey}`)
    .then(async () => {
      storeDispatch({
        type: "updateCartKey",
        payload: null,
      });
      storeDispatch({ type: "updateProducts", payload: [] });
    })
    .catch(error => {
      console.error("Error on drop cart items", error);
    });
};
