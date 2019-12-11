const axios = require("axios")

const SYLIUS_URL = process.env.GATSBY_SYLIUS_URL

export const ensureCartKey = async (storeState, storeDispatch) => {
  if (!storeState.cartKey) {
    await axios
      .post(`${SYLIUS_URL}/shop-api/carts`, {})
      .then(response => {
        localStorage.setItem("cartKey", response.data.tokenValue)
        storeDispatch({
          type: "updateCartKey",
          payload: response.data.tokenValue,
        })
      })
      .catch(error => {
        console.log("Error on cart creation ", error)
      })
  }
}

export const addVariantToCart = async (
  productCode,
  variantsCode,
  qty,
  storeState,
  storeDispatch
) => {
  await ensureCartKey(storeState, storeDispatch)

  const cartKey = storeState.cartKey

  await axios
    .post(`${SYLIUS_URL}/shop-api/carts/${cartKey}/items`, {
      productCode: productCode,
      quantity: qty,
      variantCode: variantsCode,
    })
    .then(response => {
      console.log("add", response)
      storeDispatch({ type: "addProducts", payload: response.data.items })
      storeContext.products = response.data.items
    })
    .catch(err => {
      console.log("Error on add to cart", err)
    })
}
