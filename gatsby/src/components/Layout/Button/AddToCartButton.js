import React from "react"
import {
  useStoreDispatchContext,
  useStoreStateContext,
} from "../../../context/StoreContext"
import { addVariantToCart } from "../../../helpers/cartHelper"

const AddToCartButton = ({ slug, variantsCode, qty }) => {
  const storeState = useStoreStateContext()
  const storeDispatch = useStoreDispatchContext()

  console.log("Button", { storeState })

  return (
    <button
      onClick={() => {
        addVariantToCart(
          slug,
          variantsCode,
          qty,
          storeState,
          storeDispatch
        ).then(() => {})
      }}
    >
      Ajouter au pannier
    </button>
  )
}

export default AddToCartButton
