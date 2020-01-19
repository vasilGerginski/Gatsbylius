import React from "react";
import Layout from "../../components/Layout";
import Sidebar from "../../components/Checkout/Sidebar";
import {Container, Row, Col} from 'styled-bootstrap-grid';
import { getCheckoutSummary } from "../../services/checkout/getCheckoutSummary";
import {
  useCheckoutDispatchContext,
  useCheckoutStateContext
} from "../../context/CheckoutContext";
import { useStoreStateContext } from "../../context/StoreContext";

const Customer = () => {
  const storeState = useStoreStateContext();
  const checkoutState = useCheckoutStateContext();
  const checkoutDispatch = useCheckoutDispatchContext();

  getCheckoutSummary(storeState, checkoutState, checkoutDispatch);

  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={8}>
            Hello test...
          </Col>
          <Col sm={4}>
            <Sidebar/>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Customer;