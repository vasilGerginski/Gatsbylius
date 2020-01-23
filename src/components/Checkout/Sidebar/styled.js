import styled from "styled-components";
import { Container, Col } from "styled-bootstrap-grid";
import { color, spacing } from "../../../helpers/themeHelpers";

export const SidebarContainer = styled(Container)`
  background-color: #f8fafb;
  border-color: solid 1px #979797;
  padding: ${spacing(["xl", "lg"])};
`;

export const HeadContainer = styled(Col)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Divider = styled(Col)`
  border-bottom: solid 1px ${color("greyMiddle1")};
  margin: ${spacing(["sm", "xs", "md", "xs"])};
`;

export const Title = styled.h1`
  text-transform: capitalize;
`;

export const ArticlesNumber = styled.span`
  color: ${color("white")};
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  background-color: ${color("info2")};
  border: solid 1px #e8e8e8;
  border-radius: 100%;
`;
