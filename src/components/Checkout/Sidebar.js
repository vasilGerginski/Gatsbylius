import React from "react";
import {
  useCheckoutStateContext
} from "../../context/CheckoutContext";

const Sidebar = () => {
  const checkoutState = useCheckoutStateContext();

  return (
    <>
      <h4>Order Summary</h4>
      <p>{checkoutState.orderSummary.items.count} item</p>
      {
        checkoutState.orderSummary.items.map(item => {
          return (
            <>
              {item.qty}
              {item.name}
              {item.price}
            </>
          );
        })
      }
    </>
  );
}

export default Sidebar;