import React from "react";
import _get from "lodash.get";
import { Row, Col } from "styled-bootstrap-grid";
import { useCheckoutStateContext } from "../../../context/CheckoutContext";
import {
  SidebarContainer,
  ArticlesNumber,
  Title,
  HeadContainer,
  Divider,
} from "./styled";

const Sidebar = () => {
  const checkoutState = useCheckoutStateContext();
  const items = _get(checkoutState, "orderSummary.items", []);

  return (
    <SidebarContainer>
      <Row>
        <HeadContainer>
          <Title>Shopping Cart</Title>
          <ArticlesNumber>{items.length}</ArticlesNumber>
        </HeadContainer>
        <Divider />
      </Row>
      {items.map(item => {
        return (
          <div key={item.id}>
            {item.quantity}
            {item.product.name}
            {item.total}
          </div>
        );
      })}
    </SidebarContainer>
  );
};

export default Sidebar;
