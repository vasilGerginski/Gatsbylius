import React from "react"
import { withStoreContext } from "../../../context/StoreContext"
import { addVariantToCart } from "../../../helpers/cartHelper"

const AddToCartButton = props => {
  return (
    <button
      onClick={() => {
        addVariantToCart(
          props.slug,
          props.variantsCode,
          props.qty,
          props.storeContext
        ).then(() => {
          console.log(props.storeContext)
        })
      }}
    >
      Ajouter au pannier
    </button>
  )
}

export default withStoreContext(AddToCartButton)
