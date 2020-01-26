import React from "react";
import {Container, Col} from "styled-bootstrap-grid"
import {ButtonsContainer, InputsRow, Title, ValidButton} from "../styled";
import {useCheckoutDispatchContext} from "../../../../context/CheckoutContext";
import {initShipping} from "../../../../services/checkout/initShipping";
import {useStoreDispatchContext, useStoreStateContext} from "../../../../context/StoreContext";

const CustomerShipping = () => {
  const storeState = useStoreStateContext();
  const storeDispatch = useStoreDispatchContext();
  const checkoutDispatch = useCheckoutDispatchContext();

  if (storeState.step !== "shippingInfos" && storeState.step === "customerInfo") {
    initShipping(storeState, checkoutDispatch).then(() => {
      storeDispatch({type: "updateStep", payload: "shippingInfos"})
    });
  }
  return (
    <Container>
      <InputsRow>
        <Col>
          <Title>Shipping Infos</Title>
          <ButtonsContainer>
            <ValidButton type="submit" onClick={
              () => {
              }
            }>Continue to shipping</ValidButton>
          </ButtonsContainer>
        </Col>
      </InputsRow>
    </Container>
  );
};

export default CustomerShipping;
