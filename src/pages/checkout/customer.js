import React, { useState } from "react";
import { Row, Col } from "styled-bootstrap-grid";
import { Tabs, TabPanel } from "react-web-tabs";

import { getCheckoutSummary } from "../../services/checkout/getCheckoutSummary";
import { useCheckoutDispatchContext } from "../../context/CheckoutContext";
import { useStoreStateContext } from "../../context/StoreContext";

import Paper from "../../components/Paper";
import Layout from "../../components/Layout";
import CustomerInfoForm from "../../components/Checkout/Customer/CustomerInfoForm";
import CustomerShipping from "../../components/Checkout/Customer/CustomerShipping";
import CustomerPayment from "../../components/Checkout/Customer/CustomerPayment";
import Sidebar from "../../components/Checkout/Sidebar";
import { TabListWrapper, TabCustom } from "../../templates/checkout/styled";

const Customer = () => {
  const storeState = useStoreStateContext();
  const checkoutDispatch = useCheckoutDispatchContext();
  const [currentTab, setCurrentTab] = useState("CustomerInfoForm");

  getCheckoutSummary(storeState, checkoutDispatch).then(() => {});

  const isActiveTab = tabFor => currentTab === tabFor;

  return (
    <Layout>
      <Paper fluid>
        <Row>
          <Col sm={8}>
            <Tabs
              defaultTab="CustomerInfoForm"
              onChange={tabId => setCurrentTab(tabId)}
            >
              <TabListWrapper>
                <TabCustom
                  tabFor="CustomerInfoForm"
                  className={isActiveTab("CustomerInfoForm") ? "active" : ""}
                >
                  01 Customer Information
                </TabCustom>
                <TabCustom
                  tabFor="CustomerShipping"
                  className={isActiveTab("CustomerShipping") ? "active" : ""}
                >
                  02 Shipping Info
                </TabCustom>
                <TabCustom
                  tabFor="CustomerPayment"
                  className={isActiveTab("CustomerPayment") ? "active" : ""}
                >
                  03 Payment Selection
                </TabCustom>
              </TabListWrapper>
              <TabPanel tabId="CustomerInfoForm">
                <CustomerInfoForm />
              </TabPanel>
              <TabPanel tabId="CustomerShipping">
                <CustomerShipping />
              </TabPanel>
              <TabPanel tabId="CustomerPayment">
                <CustomerPayment />
              </TabPanel>
            </Tabs>
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
