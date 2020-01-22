import React from "react";
import { Row, Col } from "styled-bootstrap-grid";

import Paper from "../../components/Paper";
import Layout from "../../components/Layout";
import CustomerInfoForm from "../../components/Customer/CustomerInfoForm";
import Sidebar from "../../components/Checkout/Sidebar";
import { getCheckoutSummary } from "../../services/checkout/getCheckoutSummary";

import {
  useCheckoutDispatchContext,
  useCheckoutStateContext,
} from "../../context/CheckoutContext";
import { useStoreStateContext } from "../../context/StoreContext";

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
