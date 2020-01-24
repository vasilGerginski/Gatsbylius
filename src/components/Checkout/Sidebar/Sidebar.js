import React from "react";
import _get from "lodash.get";
import { Row, Col } from "styled-bootstrap-grid";
import { useCheckoutStateContext } from "../../../context/CheckoutContext";
import { priceParser } from "../../../helpers/cartHelper";
import {
  SidebarContainer,
  ArticlesNumber,
  Title,
  HeadContainer,
  Divider,
  Item,
  FinalPrice,
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
          <Item key={item.id}>
            <img src={item.product.images[0].cachedPath} />
            <div className="item-datas">
              <span>{item.product.name}</span>
              <div className="item-price-qty">
                <span className="item-price">
                  {priceParser(item.total, "EUR")}
                </span>
                <span className="item-qty">quantity {item.quantity}</span>
              </div>
            </div>
          </Item>
        );
      })}
      <Row>
        <Divider />
      </Row>
      <Row>
        <Col>
          <FinalPrice>
            <span>Total</span>
            <span>{priceParser("16452", "EUR")}</span>
          </FinalPrice>
        </Col>
      </Row>
    </SidebarContainer>
  );
};

export default Sidebar;
