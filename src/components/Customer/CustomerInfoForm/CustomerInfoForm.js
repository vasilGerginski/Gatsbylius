import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Container, Row, Col } from "styled-bootstrap-grid";

import InputText from "../../Input/InputText";
import InputSelect from "../../Input/InputSelect";

import {
  Title,
  InputsRow,
  ValidButton,
  BackButton,
  ButtonsContainer,
} from "./styled";

const CustomerInfoForm = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Title>Customer Information</Title>
        </Col>
      </Row>
      <InputsRow>
        <Col sm="6">
          <InputText label="first name" name="firstName" />
        </Col>
        <Col sm="6">
          <InputText label="last name" name="lastName" />
        </Col>
      </InputsRow>
      <InputsRow>
        <Col>
          <InputText label="address" name="address" />
        </Col>
      </InputsRow>
      <InputsRow>
        <Col sm="6">
          <InputSelect label="country" name="country" />
        </Col>
        <Col sm="6">
          <InputText label="city" name="city" />
        </Col>
      </InputsRow>
      <InputsRow>
        <Col sm="6">
          <InputText label="postal code" name="postalCode" />
        </Col>
        <Col sm="6">
          <InputText label="phone" name="phone" />
        </Col>
      </InputsRow>
      <InputsRow>
        <Col>
          <ButtonsContainer>
            <BackButton>
              <span>
                <FaArrowLeft />
              </span>
              Return to Shop
            </BackButton>
            <ValidButton>Continue to shipping</ValidButton>
          </ButtonsContainer>
        </Col>
      </InputsRow>
    </Container>
  );
};

export default CustomerInfoForm;
