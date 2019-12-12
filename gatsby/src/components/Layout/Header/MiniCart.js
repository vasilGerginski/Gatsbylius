import React from "react"
import {
  useStoreDispatchContext,
  useStoreStateContext,
} from "../../../context/StoreContext"
import { priceParser, changeItemQty } from "./../../../helpers/cartHelper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import {
  MiniCartHeader,
  MiniCartItem,
  MiniCartItemName,
  MiniCartItemPrice,
  MiniCartItemQty,
  MiniCartItems,
  MiniCartTotal,
  MiniCart as MinicartComponent,
} from "./styled"

const MiniCart = () => {
  const storeState = useStoreStateContext()
  const storeDispatch = useStoreDispatchContext()

  if (storeState.miniCartIsOpen) {
    return (
      <MinicartComponent>
        <MiniCartHeader>
          <MiniCartTotal>
            Total:{" "}
            <MiniCartItemPrice>
              {priceParser(
                storeState.products.reduce(
                  (total, item) => total + item.total,
                  0
                ),
                "USD"
              )}
            </MiniCartItemPrice>
          </MiniCartTotal>
        </MiniCartHeader>
        <MiniCartItems>
          {storeState.products.map(item => {
            return (
              <MiniCartItem key={item.id}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg"
                  alt="item1"
                />
                <MiniCartItemName>{item.product.name}</MiniCartItemName>
                <MiniCartItemPrice>
                  {priceParser(item.total, "USD")}
                </MiniCartItemPrice>
                <MiniCartItemQty>Qty: {item.quantity}</MiniCartItemQty>
                <button
                  onClick={() => {
                    changeItemQty(
                      item.id,
                      "increment",
                      storeState,
                      storeDispatch
                    )
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <button
                  onClick={() => {
                    changeItemQty(
                      item.id,
                      "decrement",
                      storeState,
                      storeDispatch
                    )
                  }}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
              </MiniCartItem>
            )
          })}
        </MiniCartItems>
      </MinicartComponent>
    )
  }

  return null
}

export default MiniCart
