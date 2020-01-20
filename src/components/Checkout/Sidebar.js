import React from "react";
import { useCheckoutStateContext } from "../../context/CheckoutContext";
import { SidebarContainer } from "./styled";

const Sidebar = () => {
  const checkoutState = useCheckoutStateContext();

  return (
    <SidebarContainer>
      <h4>Order Summary</h4>
      <p>{checkoutState.orderSummary.items.length} item</p>
      {checkoutState.orderSummary.items.map(item => {
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
