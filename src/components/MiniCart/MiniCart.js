import React from "react";
import {
  useStoreDispatchContext,
  useStoreStateContext,
} from "../../context/StoreContext";
import { priceParser, getTotal } from "./../../helpers/cartHelper";

import {
  MiniCartHeader,
  MiniCartItem,
  MiniCartItemName,
  MiniCartItemPrice,
  MiniCartItemQty,
  MiniCartItems,
  MiniCartTotal,
  MiniCart as MinicartComponent,
  MiniCartImage,
  CheckoutButton,
} from "./styled";

const SYLIUS_URL = process.env.GATSBY_SYLIUS_URL;
const miniCartRef = React.createRef();

const MiniCart = () => {
  const storeState = useStoreStateContext();
  const storeDispatch = useStoreDispatchContext();

  if (storeState.miniCartIsOpen) {
    if (
      typeof window !== "undefined" &&
      document.getElementsByTagName("main")[0] &&
      storeState.miniCartIsOpen
    ) {
      document
        .getElementsByTagName("main")[0]
        .addEventListener("mousedown", e => {
          if (miniCartRef.current && !miniCartRef.current.contains(e.target)) {
            storeDispatch({ type: "toggleMiniCart" });
          }
        });
    }

    return (
      <MinicartComponent ref={miniCartRef}>
        <MiniCartHeader>
          <MiniCartTotal>
            Subtotal:{" "}
            <MiniCartItemPrice>
              {priceParser(getTotal(storeState.products), storeState.currency)}
            </MiniCartItemPrice>
          </MiniCartTotal>
        </MiniCartHeader>
        <MiniCartItems>
          {storeState.products.map(item => {
            const productImage = item.product.images
              .filter(image => image.code === "main")
              .shift();
            return (
              <MiniCartItem key={item.id}>
                <MiniCartImage
                  src={`${SYLIUS_URL}/media/image/${productImage.path}`}
                  alt={productImage.code}
                />
                <MiniCartItemName>{item.product.name}</MiniCartItemName>
                <MiniCartItemQty>{item.quantity} x </MiniCartItemQty>
                <MiniCartItemPrice>
                  {priceParser(item.total / item.quantity, storeState.currency)}
                </MiniCartItemPrice>
              </MiniCartItem>
            );
          })}
        </MiniCartItems>
        <CheckoutButton
          onClick={() => {
            if (typeof window !== "undefined") {
              storeDispatch({ type: "toggleMiniCart" });
              window.location = "/checkout/customer";
            }
          }}
        >
          Checkout
        </CheckoutButton>
      </MinicartComponent>
    );
  }

  return null;
};

export default MiniCart;
