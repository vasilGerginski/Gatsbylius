import React from "react";
import { Row, Col } from "styled-bootstrap-grid";

import { getCheckoutSummary } from "../../services/checkout/getCheckoutSummary";
import {
  useCheckoutDispatchContext,
  useCheckoutStateContext,
} from "../../context/CheckoutContext";
import { useStoreStateContext } from "../../context/StoreContext";

import Paper from "../../components/Paper";
import Layout from "../../components/Layout";
import {
  CustomerInfoForm,
  CustomerShipping,
} from "../../components/Checkout/Customer";
import { Sidebar } from "../../components/Checkout/Sidebar";

const Customer = () => {
  const storeState = useStoreStateContext();
  const checkoutDispatch = useCheckoutDispatchContext();

  getCheckoutSummary(storeState, checkoutDispatch).then(() => {});

  return (
    <Layout>
      <Paper fluid>
        <Row>
          <Col sm={8}>
            <CustomerInfoForm />
            <CustomerShipping style={{ display: "none" }} />
          </Col>
          <Col sm={4}>
            <Sidebar />
          </Col>
        </Row>
      </Paper>
    </Layout>
  );
};

export default Customer;
