import styled from "styled-components";
import { Container, Col, Row } from "styled-bootstrap-grid";
import { color, spacing } from "../../../helpers/themeHelpers";

export const SidebarContainer = styled(Container)`
  background-color: #f8fafb;
  border-color: solid 1px #979797;
  padding: ${spacing(["xl", "lg"])};
  min-height: 45rem;
`;

export const HeadContainer = styled(Col)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Divider = styled(Col)`
  border-bottom: solid 1px ${color("greyAlto")};
  margin: ${spacing(["sm", "xs", "md", "xs"])};
`;

export const Title = styled.h1`
  text-transform: capitalize;
`;

export const ArticlesNumber = styled.span`
  color: ${color("white")};
  font-weight: 600;
  padding: 0.25rem 0.8rem;
  background-color: ${color("info2")};
  border: solid 1px #e8e8e8;
  border-radius: 100%;
`;

export const Item = styled.div`
  display: flex;
  color: ${color("greySemiDark")};
  margin-bottom: ${spacing(["sm"])};

  &::last-child {
    margin-bottom: 0;
  }

  img {
    width: 6rem;
    height: 6rem;
    margin-right: ${spacing(["sm"])};
  }

  .item-datas {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 0.25rem 0;

    .item-price-qty {
      font-weight: 600;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const FinalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: ${color("greyDark")};
`;
