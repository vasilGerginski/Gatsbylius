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
