import React from "react";
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardDetails from "../../Card/CardDetails";
import { Container, Row, Col } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

export const Notes = () => {
  return (
    <div className="Notes">
      <Container>
        <Row>
          <Card>
            <Row className="NotesBar">
              <Col xl={8}>
                <CardHeader>Note for Week 1</CardHeader>
              </Col>
              <Col xl={3}>
                <CardDetails>2022-03-24</CardDetails>
              </Col>
              <Col xl={1}><FiDownload className="ReactIcon"/></Col>
            </Row>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Notes;
