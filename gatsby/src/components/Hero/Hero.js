import React from "react";
import styled from "styled-components";
import { spacing, color } from "../../helpers/themeHelpers";
import heroImage from "../../images/heroImage.jpg";
import { media } from "styled-bootstrap-grid";

const StyledHero = styled.div`
  position: relative;
  height: 50vh;
  font-size: 2.6vw;
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
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PageTitle = styled.h1`
  position: relative;
  letter-spacing: 0.1em;
  text-shadow: ${({ theme }) => theme.boxShadows.textMedium};
`;

const Hero = () => {
  return (
    <StyledHero bgImage={heroImage}>
      <Overlay>
        <PageTitle>Gatsbylius Print Shop</PageTitle>
      </Overlay>
    </StyledHero>
  );
};

export default Hero;
