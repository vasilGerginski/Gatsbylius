const axios = require("axios")

const SYLIUS_URL = process.env.GATSBY_SYLIUS_URL

export const ensureCartKey = async storeContext => {
  if (!storeContext.cartKey) {
    await axios
      .post(`${SYLIUS_URL}/shop-api/carts`, {})
      .then(response => {
        localStorage.setItem("cartKey", response.data.tokenValue)
        storeContext.cartKey = response.data.tokenValue
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
  storeContext
) => {
  await ensureCartKey(storeContext)

  const cartKey = storeContext.cartKey

  await axios
    .post(`${SYLIUS_URL}/shop-api/carts/${cartKey}/items`, {
      productCode: productCode,
      quantity: qty,
      variantCode: variantsCode,
    })
    .then(response => {
      console.log("add", response)
      storeContext.products = response.data.items
    })
    .catch(err => {
      console.log("Error on add to cart", err)
    })
}
