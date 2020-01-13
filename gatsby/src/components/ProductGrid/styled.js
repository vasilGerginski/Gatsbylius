import styled, { css } from "styled-components";
import { spacing, color } from "../../helpers/themeHelpers";
import { Link } from "gatsby";

export const GalleryItem = styled.div`
  position: relative;
  padding: 0.5rem;
  margin-bottom: 2rem;
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
`;

export const GalleryImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 15rem;
`;

export const ProductOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  font-size: 0.9rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${color("white")};
  background: rgba(15, 191, 185, 0.92);
  box-shadow: inset 0px 0px 20px rgba(255, 255, 255, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const ProductOverlayButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${color("white")};
  background: transparent;
  border: 1px solid ${color("white")};
  transition: background 0.3s, color 0.3s;

  &:hover {
    cursor: pointer;
    color: ${color("primary")};
    background: ${color("white")};
  }

  span {
    margin-right: 1rem;
  }
`;

export const ProductOverlayButton = styled.button`
  ${ProductOverlayButtonStyle}
`;

export const ProductOverlayLink = styled(Link)`
  ${ProductOverlayButtonStyle}
`;

export const Infos = styled.div`
  margin-top: ${spacing(["xs"])};
  font-size: 0.9rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${color("black")};
`;
