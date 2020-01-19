import React from "react";
import PropTypes from "prop-types";
import { checkoutReducer } from "../reducers/checkoutReducer";

export const defaultCheckoutState =
  typeof window !== "undefined" && localStorage.getItem("CheckoutState")
    ? JSON.parse(localStorage.getItem("CheckoutState"))
    : {
      orderSummary: {
        items: [],
        subTotal: 0,
        shipping: 0,
        taxes: 0,
        promoCode: "",
        total: 0,
        currency: "USD"
      },
      customerInfos: {},
      shippingInfos: {},
    };

export const CheckoutStateContext = React.createContext(defaultCheckoutState);
export const CheckoutDispatchContext = React.createContext({});

export const CheckoutProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(checkoutReducer, defaultCheckoutState);

  React.useEffect(() => {
    localStorage.setItem("CheckoutState", JSON.stringify(state));
  }, [state]);

  return (
    <CheckoutStateContext.Provider value={state}>
      <CheckoutDispatchContext.Provider value={dispatch}>
        {children}
      </CheckoutDispatchContext.Provider>
    </CheckoutStateContext.Provider>
  );
};

CheckoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCheckoutStateContext = () => {
  const context = React.useContext(CheckoutStateContext);
  if (context === undefined) {
    throw new Error(
      "useCheckoutStateContext must be used within a CheckoutStateProvider"
    );
  }
  return context;
};

export const useCheckoutDispatchContext = () => {
  const context = React.useContext(CheckoutDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useCheckoutDispatchContext must be used within a CheckoutDispatchContext"
    );
  }
  return context;
};
