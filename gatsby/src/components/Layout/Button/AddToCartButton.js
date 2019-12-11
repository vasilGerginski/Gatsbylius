import React from "react"
import {
  useStoreDispatchContext,
  useStoreStateContext,
  withStoreContext,
} from "../../../context/StoreContext"
import { addVariantToCart } from "../../../helpers/cartHelper"

const AddToCartButton = props => {
  const storeState = useStoreStateContext()
  const storeDispatch = useStoreDispatchContext()

  return (
    <button
      onClick={() => {
        addVariantToCart(
          props.slug,
          props.variantsCode,
          props.qty,
          storeState,
          storeDispatch
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
