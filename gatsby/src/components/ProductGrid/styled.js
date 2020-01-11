import styled from "styled-components";
import { Link } from "gatsby";
import { media } from "styled-bootstrap-grid";

export const GalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
  margin-bottom: 2rem;
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

  :last-child {
    margin-right: auto;
  }

  /* img {
    transition: all 0.3s !important;
  }

  @media (hover: hover) and (min-width: 769px) {
    &:hover img {
      transform: scale(1.1);
    }
  } */
`;

export const GalleryItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
`;
