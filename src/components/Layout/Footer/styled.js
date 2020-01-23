import styled, { css } from "styled-components";
import { color, spacing } from "../../../helpers/themeHelpers";

const centerXY = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default styled.footer`
  ${centerXY}
  height: ${spacing(["lg"])};
  padding: ${spacing(["none", "sm"])};
  font-size: 0.9rem;
  background-color: #fff;
  z-index: 1;

  a {
    ${centerXY}
    transition: color 0.3s;

    &:hover {
      color: ${color("primary")};
    }
  }

  div,
  span {
    ${centerXY}
    margin: 0 0.2rem;
  }
`;
