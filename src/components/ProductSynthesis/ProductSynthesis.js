import React, { useState } from "react";
import PropTypes from "prop-types";
import Configurator from "../Configurator";
import Price from "../Price";
import AddToCartButton from "../Button/AddToCartButton";

const ProductSynthesis = ({ product }) => {
  const [selectedVariant, selectVariant] = useState(null);

  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.channelCode}</p>

      {selectedVariant ? (
        <Price price={selectedVariant.price} />
      ) : (
        <Price price={product.variants[0].price} />
      )}

      <Configurator
        variants={product.variants}
        onChange={variant => selectVariant(variant)}
      />
      <AddToCartButton
        slug={product.code}
        variantsCode={
          selectedVariant ? selectedVariant.code : product.variants[0].code
        }
        qty={1}
        isSimple={product.variants.length === 1}
      />
    </>
  );
};

ProductSynthesis.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductSynthesis;
