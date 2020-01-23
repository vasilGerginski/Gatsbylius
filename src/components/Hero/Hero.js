import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import scrollTo from "gatsby-plugin-smoothscroll";
import { StyledHero, Overlay, PageTitle, ProductsAnchor } from "./styled";

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

  console.log(file);

  return (
    <StyledHero>
      <BackgroundImage
        fluid={file.childImageSharp.fluid}
        Tag="section"
        style={{
          height: `100vh`,
          width: `100vw`,
          backgroundColor: `transparent`,
          backgroundSize: `cover`,
          backgroundPosition: `center center`,
          display: `flex`,
          alignItems: `center`,
        }}
      >
        <Overlay>
          <PageTitle>Gatsbylius Print Shop</PageTitle>
          <ProductsAnchor onClick={() => scrollTo("#our-products")}>
            Browse our collection
          </ProductsAnchor>
        </Overlay>
      </BackgroundImage>
    </StyledHero>
  );
};

export default Hero;
