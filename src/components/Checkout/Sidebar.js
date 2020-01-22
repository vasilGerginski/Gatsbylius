import React from "react";
import _get from "lodash.get";
import { useCheckoutStateContext } from "../../context/CheckoutContext";
import { SidebarContainer } from "./styled";

const Sidebar = () => {
  const checkoutState = useCheckoutStateContext();
  const items = _get(checkoutState, "orderSummary.items", []);

  return (
    <SidebarContainer>
      <h4>Order Summary</h4>
      <p>{items.length} item</p>
      {items.map(item => {
        return (
          <div key={item.id}>
            {item.quantity}
            {item.product.name}
            {item.total}
          </div>
        );
      })}
    </SidebarContainer>
  );
};

export default Sidebar;
