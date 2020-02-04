import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoMdStarHalf, IoMdStarOutline, IoMdStar } from "react-icons/io";
import scrollTo from "gatsby-plugin-smoothscroll";
import { FiExternalLink } from "react-icons/fi";

import Configurator from "../Configurator";
import AddToCartButton from "../Button/AddToCartButton";
import Price from "../Price";
import QuantitySelect from "../QuantitySelect";
import { ProductTitle, Sku, LearnMoreButton } from "./styled";

const ProductSynthesis = ({ product }) => {
  const {
    name,
    photographer,
    unsplash_url,
    shortDescription,
    code,
    variants,
  } = product;
  const [selectedVariant, selectVariant] = useState(null);
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

      {photographer && (
        <p>
          <strong>Photographer:</strong> {photographer}
        </p>
      )}

      {unsplash_url && (
        <a href={unsplash_url} target="_blank" rel="noreferrer noopener">
          <span>
            <FiExternalLink />
          </span>
          <span>See this photo on unsplash.com</span>
        </a>
      )}

      <p>
        {shortDescription && shortDescription}
        <span>
          <LearnMoreButton
            id="our-products"
            onClick={() => scrollTo("#details")}
          >
            Learn more
          </LearnMoreButton>
        </span>
      </p>

      {selectedVariant ? (
        <Price price={selectedVariant.price} hasSymbolBefore />
      ) : (
        <Price price={variants[0].price} hasSymbolBefore />
      )}

      <Configurator
        variants={variants}
        onChange={variant => selectVariant(variant)}
      />

      <QuantitySelect
        name="quantity"
        value={quantity}
        onChange={value => setQuantity(value)}
      />

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
