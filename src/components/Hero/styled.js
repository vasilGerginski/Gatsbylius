import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import BackgroundImage from "gatsby-background-image";
import { spacing, color } from "../../helpers/themeHelpers";

export const StyledBackgroundImage = styled(BackgroundImage)`
  position: relative;
  width: 100%;
  height: 50vh;
  ${media.md`
    height: calc(100vh - ${spacing(["lg"])});
  `}
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.65);
`;

export const PageTitle = styled.h1`
  position: relative;
  font-size: 5.5vw;
  margin-bottom: ${spacing(["xl"])};
  letter-spacing: 0.1em;
  color: ${color("white")};
  text-shadow: ${({ theme }) => theme.boxShadows.textMedium};
`;

export const ProductsAnchor = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
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
