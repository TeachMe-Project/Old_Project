import * as React from "react";
import { Container, Col, Row } from "react-bootstrap";

export const Details = () => {
  return (
    <div className="Details">
      <Container>
        <Row>
          <Row className="DetailItem">
            <Col xl={3}>
              <div className="DetailLabel">Subject</div>
            </Col>
            <Col xl={1}>
              <div className="DetailLabel">:</div>
            </Col>
            <Col xl={8}>
              <div className="DetailValue">Mathematics</div>
            </Col>
          </Row>
          <Row className="DetailItem">
            <Col xl={3}>
              <div className="DetailLabel">Teacher</div>
            </Col>
            <Col xl={1}>
              <div className="DetailLabel">:</div>
            </Col>
            <Col xl={8}>
              <div className="DetailValue">Mr. Lasitha Nuwan</div>
            </Col>
          </Row>
          <Row className="DetailItem">
            <Col xl={3}>
              <div className="DetailLabel">Grade</div>
            </Col>
            <Col xl={1}>
              <div className="DetailLabel">:</div>
            </Col>
            <Col xl={8}>
              <div className="DetailValue">8</div>
            </Col>
          </Row>
          <Row className="DetailItem">
            <Col xl={3}>
              <div className="DetailLabel">Description</div>
            </Col>
            <Col xl={1}>
              <div className="DetailLabel">:</div>
            </Col>
            <Col xl={8}>
              <div className="DetailValue">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </div>
            </Col>
          </Row>
          <Row className="DetailItem">
            <Col xl={3}>
              <div className="DetailLabel">Monthly Payment</div>
            </Col>
            <Col xl={1}>
              <div className="DetailLabel">:</div>
            </Col>
            <Col xl={8}>
              <div className="DetailValue">LKR 2500</div>
            </Col>
          </Row>
          <Row className="DetailItem">
            <Col xl={3}>
              <div className="DetailLabel">Started Date</div>
            </Col>
            <Col xl={1}>
              <div className="DetailLabel">:</div>
            </Col>
            <Col xl={8}>
              <div className="DetailValue">2022-04-27</div>
            </Col>
          </Row>
          <Row className="DetailItem">
            <Col xl={3}>
              <div className="DetailLabel">Duration</div>
            </Col>
            <Col xl={1}>
              <div className="DetailLabel">:</div>
            </Col>
            <Col xl={8}>
              <div className="DetailValue">12 months</div>
            </Col>
          </Row>
          <Row className="DetailItem">
            <Col xl={3}>
              <div className="DetailLabel">Institute</div>
            </Col>
            <Col xl={1}>
              <div className="DetailLabel">:</div>
            </Col>
            <Col xl={8}>
              <div className="DetailValue">Sigma Institute</div>
            </Col>
          </Row>

          {/* <div className="DetailLabel"></div>
            <div className="DetailLabel"></div>
            <div className="DetailLabel">Description</div>
            <div className="DetailLabel"> Amount</div>
            <div className="DetailLabel">Course Started Date</div>
            <div className="DetailLabel">Duration</div>
          </Col>
          
            <div className="DetailLabel">:</div>
            <div className="DetailLabel">:</div>
            <div className="DetailLabel">:</div>
            <div className="DetailLabel">:</div>

            <div className="DetailLabel">:</div>
            <div className="DetailLabel">:</div>
            <div className="DetailLabel">:</div>
          </Col>
          <Col xl={6}>
          

          </Col>*/}
        </Row>
      </Container>
    </div>
  );
};

export default Details;
