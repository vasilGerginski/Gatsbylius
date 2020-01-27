import React from "react";
import Paper from "../components/Paper";
import { Col, Row } from "styled-bootstrap-grid";
import Layout from "../components/Layout";
import {
  ConfirmationTitle,
  ConfirmationText,
} from "../components/OrderConfirmation/styled";
import { useCheckoutStateContext } from "../context/CheckoutContext";

const OrderConfirmation = () => {
  const checkoutState = useCheckoutStateContext();
  return (
    <Layout>
      <Paper fluid>
        <Row>
          <Col sm={12}>
            <ConfirmationTitle>
              {checkoutState.customerInfos.firstName}, Thanks for your order !
            </ConfirmationTitle>
            <ConfirmationText>
              You will receive an email with all the informations regarding your
              order, its tracking number as soon as your articles will be ready
              to be shipped (usually within 24h)
            </ConfirmationText>
            <ConfirmationText>
              You can check your order status at anytime at #######.
            </ConfirmationText>
          </Col>
        </Row>
      </Paper>
    </Layout>
  );
};

export default OrderConfirmation;
