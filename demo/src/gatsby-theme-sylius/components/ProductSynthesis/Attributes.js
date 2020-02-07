import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { FiExternalLink } from "react-icons/fi";

const Attributes = ({ attributes: { photographer, unsplash_url } }) => {
  console.log(photographer, unsplash_url);
  return (
    <>
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
    </>
  );
};

Attributes.propTypes = {
  attributes: PropTypes.shape({
    photographer: PropTypes.string,
    unsplash_url: PropTypes.string,
  }),
};

export default Attributes;

export const query = graphql`
  fragment Attributes on Product {
    attributes {
      photographer
      unsplash_url
    }
  }
`;
