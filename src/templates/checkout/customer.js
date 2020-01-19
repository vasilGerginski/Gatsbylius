import React from "react";
import Layout from "../../components/Layout";
import {Container, Row, Col} from 'styled-bootstrap-grid';


const Customer = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={12}>
            Hello test...
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Customer;