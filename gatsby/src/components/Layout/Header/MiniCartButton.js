import React from "react"
import {
  useStoreDispatchContext,
  useStoreStateContext,
} from "../../../context/StoreContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { CartInfo, NavItem, NavLink } from "./styled"

const MiniCartButton = () => {
  const storeState = useStoreStateContext()
  const storeDispatch = useStoreDispatchContext()
  return (
    console.log(storeState) || (
      <NavItem key={"cart"}>
        <NavLink
          onClick={() => {
            storeDispatch({ type: "add", payload: "okok" })
            storeState.miniCartIsOpen
              ? (storeState.miniCartIsOpen = false)
              : (storeState.miniCartIsOpen = true)
          }}
        >
          <FontAwesomeIcon icon={faShoppingCart} />{" "}
          <CartInfo>{storeState.products.length}</CartInfo>
        </NavLink>
      </NavItem>
    )
  )
}

export default MiniCartButton
