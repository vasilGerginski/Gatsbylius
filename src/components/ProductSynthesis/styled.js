import styled from "styled-components";
import { color } from "../../helpers/themeHelpers";

export const ProductTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.6rem;
  line-height: 1.3;
  text-transform: none;
`;

export const Sku = styled.small`
  font-size: 0.8rem;
  font-weight: bold;
  color: ${color("greyMedium")};
`;

export const LearnMoreButton = styled.button`
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
  font-weight: 600;
  padding: 0.5rem;
  width: 50%;
  border: none;
  cursor: pointer;
  margin: 1rem 0;
  display: block;

  color: ${color("white")};
  background-color: ${color("black")};
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: ${color("deepBlue2")};
  }
`;
