import React from "react"
import { withStoreContext } from "../../context/StoreContext"
const axios = require("axios")

const SYLIUS_URL = process.env.GATSBY_SYLIUS_URL

const CartProvider = props => {
  if (!props.storeContext.cartKey) {
    axios
      .post(`${SYLIUS_URL}/shop-api/carts`, {})
      .then(response => {
        localStorage.setItem("cartKey", response.data.tokenValue)
        props.storeContext.cartKey = response.data.tokenValue
      })
      .catch(error => {
        console.log("Error on cart creation ", error)
      })
  }

  return null
}

export default withStoreContext(CartProvider)
