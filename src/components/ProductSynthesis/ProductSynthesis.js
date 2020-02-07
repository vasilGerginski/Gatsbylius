import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoMdStarHalf, IoMdStarOutline, IoMdStar } from "react-icons/io";
import scrollTo from "gatsby-plugin-smoothscroll";

import Configurator from "../Configurator";
import AddToCartButton from "../Buttons/AddToCartButton";
import Price from "../Price";
import QuantitySelect from "../QuantitySelect";
import Attributes from "./Attributes";
import { ProductTitle, Sku, PricePanel, LearnMoreButton } from "./styled";

const ProductSynthesis = ({ product }) => {
  const { name, attributes, shortDescription, code, variants } = product;
  const [selectedVariant, selectVariant] = useState(variants[0]);
  const [quantity, setQuantity] = useState({ label: 1, value: 1 });

  return (
    <section>
      <ProductTitle>{name}</ProductTitle>

      <Sku>Code : {code}</Sku>

      <p>
        {/* // TODO : create a <Rating /> component that converts data to stars */}
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStarHalf />
        <IoMdStarOutline />
      </p>

      <Attributes attributes={attributes} />

      <p>
        {shortDescription && shortDescription}

        <LearnMoreButton id="our-products" onClick={() => scrollTo("#details")}>
          <span>Learn more</span>
        </LearnMoreButton>
      </p>

      <Configurator
        selectedVariant={selectedVariant}
        variants={variants}
        onChange={selectVariant}
      />

      <PricePanel>
        <QuantitySelect
          name="quantity"
          value={quantity}
          onChange={value => setQuantity(value)}
        />

        {selectedVariant ? (
          <Price price={selectedVariant.price} hasSymbolBefore />
        ) : (
          <Price price={variants[0].price} hasSymbolBefore />
        )}
      </PricePanel>

      <AddToCartButton
        slug={code}
        variantsCode={selectedVariant ? selectedVariant.code : variants[0].code}
        qty={quantity.value}
        name={name}
        isSimple={variants.length === 1}
      />
    </section>
  );
};

ProductSynthesis.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductSynthesis;
