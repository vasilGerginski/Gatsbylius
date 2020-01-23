import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { priceParser } from "../helpers/cartHelper";

const StyledPrice = styled.strong`
  font-size: 2rem;
`;

const Price = ({ price }) =>
  console.log(price) || (
    <p>
      <StyledPrice>{priceParser(price.current, price.currency)}</StyledPrice>
    </p>
  );

Price.propTypes = {
  price: PropTypes.shape({
    current: PropTypes.number.isRequired,
    currency: PropTypes.oneOf(["USD", "EUR"]),
  }),
};

export default Price;
