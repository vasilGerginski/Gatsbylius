import React from "react";
import styled from "styled-components";
import { spacing, color } from "../../helpers/themeHelpers";
import heroImage from "../../images/heroImage.jpg";
import { media } from "styled-bootstrap-grid";
import scrollTo from "gatsby-plugin-smoothscroll";

const StyledHero = styled.div`
  position: relative;
  height: 50vh;
  color: ${color("white")};
  background-image: url(${heroImage});
  background-size: cover;
  ${media.md`
    height: calc(100vh - ${spacing(["lg"])});
  `}
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PageTitle = styled.h1`
  position: relative;
  font-size: 5.5vw;
  margin-bottom: ${spacing(["xl"])};
  letter-spacing: 0.1em;
  text-shadow: ${({ theme }) => theme.boxShadows.textMedium};
`;

const ProductsAnchor = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${color("white")};
  background: transparent;
  border: 1px solid ${color("white")};
  transition: background 0.3s, color 0.3s;

  &:hover {
    cursor: pointer;
    color: ${color("black")};
    background: ${color("white")};
  }
`;

const Hero = () => {
  return (
    <StyledHero bgImage={heroImage}>
      <Overlay>
        <PageTitle>Gatsbylius Print Shop</PageTitle>
        <ProductsAnchor onClick={() => scrollTo("#our-products")}>
          Browse our collection
        </ProductsAnchor>
      </Overlay>
    </StyledHero>
  );
};

export default Hero;
