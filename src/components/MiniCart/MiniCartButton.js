import React from "react";
import {
  useStoreDispatchContext,
  useStoreStateContext,
} from "../../context/StoreContext";
import { FiShoppingCart } from "react-icons/fi";
import { CartButton, CartInfo } from "./styled";
import { NavItem } from "../Layout/Header/styled";

const MiniCartButton = () => {
  const storeState = useStoreStateContext();
  const storeDispatch = useStoreDispatchContext();
  return (
    <NavItem key={"cart"}>
      <CartButton
        onClick={() => {
          storeDispatch({ type: "toggleMiniCart" });
        }}
      >
        <FiShoppingCart />
        <CartInfo>{storeState.products.length}</CartInfo>
      </CartButton>
    </NavItem>
  );
};

export default MiniCartButton;
