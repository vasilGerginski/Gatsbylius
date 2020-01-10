import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { spacing, color } from "../../helpers/themeHelpers";
import heroImage from "../../images/heroImage.jpg";

const StyledHero = styled.div`
  position: relative;
  height: calc(100vh - ${spacing(["lg"])});
  font-size: 2.7vw;
  color: ${color("white")};
  background-image: url(${heroImage});
  background-size: cover;
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
  text-shadow: ${({ theme }) => theme.boxShadows.medium};
`;

const Hero = ({ pageTitle }) => {
  return (
    <StyledHero bgImage={heroImage}>
      <Overlay>
        <PageTitle>{pageTitle}</PageTitle>
      </Overlay>
    </StyledHero>
  );
};

Hero.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Hero;
