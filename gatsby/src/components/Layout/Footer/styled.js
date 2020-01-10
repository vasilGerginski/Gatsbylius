import styled from "styled-components";
import { spacing } from "../../../helpers/themeHelpers";

export default styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${spacing(["lg"])};
  padding: ${spacing(["none", "base"])};
  font-size: 0.8rem;
  background-color: #fff;
  z-index: 1;
`;
