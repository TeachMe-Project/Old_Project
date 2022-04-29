import React from 'react'
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardDetails from "../../Card/CardDetails";
import { Container, Row, Col } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";


const PendingPayments = () => {
  return (
    <div className="PendingPayments">
        <Container>
        <Row>
          <Card>
            <Row className="PendingPaymentBar">
              <Col xl={4}>
                <CardHeader>Mathematics Class</CardHeader>
              </Col>
              <Col xl={3}>
                <CardHeader>Mr. Lasitha Nuwan</CardHeader>
              </Col>
              <Col xl={3}>
                <CardHeader>Sigma Institute</CardHeader>
              </Col>
              <Col xl={2}>
                <CardDetails>LKR 2500</CardDetails>
              </Col>
             
            </Row>
          </Card>
        
        </Row>
      </Container>
    </div>
  )
}

export default PendingPayments