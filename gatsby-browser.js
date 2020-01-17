/**
 @todo: delete this file if unused
 */

import React from "react";
import PropTypes from "prop-types";
import { StoreProvider } from "./src/context/StoreContext";

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node,
};
