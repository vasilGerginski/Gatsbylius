import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../components/Checkout/Sidebar";
import Layout from "../components/Layout";

const Cart = () => {
  return (
    <Layout>
      <Sidebar isCartPage />
    </Layout>
  );
};

export default Cart;
