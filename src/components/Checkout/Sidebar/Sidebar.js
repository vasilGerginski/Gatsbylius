import React from "react";
import _get from "lodash.get";
import { Row, Col } from "styled-bootstrap-grid";
import { FaChevronLeft, FaChevronRight, FaTimesCircle } from "react-icons/fa";
import { useCheckoutStateContext } from "../../../context/CheckoutContext";
import { getTotal, priceParser } from "../../../helpers/cartHelper";
import {
  SidebarContainer,
  ArticlesNumber,
  Title,
  HeadContainer,
  Divider,
  Item,
  FinalPrice,
} from "./styled";
import { useStoreStateContext } from "../../../context/StoreContext";

const Sidebar = ({ isCartPage }) => {
  const checkoutState = useCheckoutStateContext();
  const storeState = useStoreStateContext();
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
              <div className="item-name-delete">
                <span>{item.product.name}</span>
                <FaTimesCircle className="item-delete-icon" fontSize="1.2rem" />
              </div>
              <div className="item-price-qty">
                <span className="item-price">
                  {priceParser(item.total, storeState.currency)}
                </span>
                {isCartPage ? (
                  <div className="item-qty">
                    <span>Qty</span>
                    <div className="item-dec-inc">
                      <span className="icon">
                        <FaChevronLeft fontSize="1.3rem" />
                      </span>
                      <span>{item.quantity}</span>
                      <span className="icon">
                        <FaChevronRight fontSize="1.3rem" />
                      </span>
                    </div>
                  </div>
                ) : (
                  <span className="item-qty">Qty {item.quantity}</span>
                )}
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
            <span>{priceParser(getTotal(items), storeState.currency)}</span>
          </FinalPrice>
        </Col>
      </Row>
    </SidebarContainer>
  );
};

export default Sidebar;
