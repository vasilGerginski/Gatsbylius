import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const ProductBreadcrumb = ({ product }) => {
  return (
    <div itemScope itemType="http://schema.org/BreadcrumbList">
      <span
        itemProp="itemListElement"
        itemScope
        itemType="http://schema.org/ListItem"
      >
        <Link to="/">
          <span itemProp="item">
            <span itemProp="name">Gatsbylius</span>
          </span>
        </Link>
      </span>{" "}
      /{" "}
      <span
        itemProp="itemListElement"
        itemScope
        itemType="http://schema.org/ListItem"
      >
        <Link to={`/categories/${product.taxons.main}`}>
          <span itemProp="item">
            <span itemProp="name">{product.taxons.main}</span>
          </span>
        </Link>
      </span>{" "}
      / <span>{product.name}</span>
    </div>
  );
};

ProductBreadcrumb.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductBreadcrumb;
