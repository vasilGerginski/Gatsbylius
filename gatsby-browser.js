import React from "react";
import PropTypes from "prop-types";
import { StoreProvider } from "./src/context/StoreContext";

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node,
};

// ES6 way
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
