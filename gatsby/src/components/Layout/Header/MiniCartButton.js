import React from "react"
import {
  useStoreDispatchContext,
  useStoreStateContext,
} from "../../../context/StoreContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { CartInfo, NavItem, NavLink } from "./styled"

const MiniCartButton = props => {
  const storeState = useStoreStateContext()
  const storeDispatch = useStoreDispatchContext()
  return (
    console.log(props) || (
      <NavItem key={"cart"}>
        <NavLink
          onClick={() => {
            storeDispatch({ type: "bloob" })
            storeState.storeContext.miniCartIsOpen
              ? (storeState.storeContext.miniCartIsOpen = false)
              : (storeState.storeContext.miniCartIsOpen = true)
          }}
        >
          <FontAwesomeIcon icon={faShoppingCart} />{" "}
          <CartInfo>{storeState.storeContext.products.length}</CartInfo>
        </NavLink>
      </NavItem>
    )
  )
}

export default MiniCartButton
