import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import {
  StyledBackgroundImage,
  Overlay,
  PageTitle,
  ProductsAnchor,
} from "./styled";

const Hero = () => {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(name: { eq: "heroImage" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <StyledBackgroundImage fluid={file.childImageSharp.fluid} Tag="section">
      <Overlay>
        <PageTitle>Gatsbylius Print Shop</PageTitle>
        <ProductsAnchor onClick={() => scrollTo("#our-products")}>
          Browse our collection
        </ProductsAnchor>
      </Overlay>
    </StyledBackgroundImage>
  );
};

export default Hero;
