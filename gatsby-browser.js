/**
 @todo: delete this file if unused
 */

import React from "react";
import PropTypes from "prop-types";
import { StoreProvider } from "./src/context/StoreContext";
import { CheckoutProvider } from "./src/context/CheckoutContext";

export const wrapRootElement = ({ element }) => (
  <StoreProvider>
    <CheckoutProvider>{element}</CheckoutProvider>
  </StoreProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node,
};
