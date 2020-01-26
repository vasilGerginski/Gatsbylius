import React from "react";
import {Container, Row, Col} from "styled-bootstrap-grid";
import {ButtonsContainer, InputsRow, Title, ValidButton} from "../styled";
import {submitCustomerInfo} from "../../../../services/checkout/submitCustomerInfo";

const CustomerPayment = () => {

  return (
    <Container>
      <InputsRow>
        <Col>
          <Title>Payment Selection</Title>
          <ButtonsContainer>
            <ValidButton type="submit" onClick={
              () => {
                checkoutDispatch({type: "updateCustomerInfos", payload: formValues})
                checkoutDispatch({type: "updateCheckoutCurrentTab", payload: "CustomerShipping"})
                submitCustomerInfo(storeState, checkoutState.customerInfos)
              }
            }>Continue to shipping</ValidButton>
          </ButtonsContainer>
        </Col>
      </InputsRow>
    </Container>
  );
};

export default CustomerPayment;
