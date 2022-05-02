import React from 'react'
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardDetails from "../../Card/CardDetails";
import { Container, Row, Col } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

const Homework = () => {
  return (
    <div className="Homework">
    <Container>
        <Row>
          <Card>
            <Row className="HomeworkBar">
              <Col xl={7}>
                <CardHeader>Homework Topic</CardHeader>
              </Col>
              <Col xl={2}>
                <CardDetails>Deadline: </CardDetails>
              </Col>
              <Col xl={2}>
                <CardDetails>2022-03-24</CardDetails>
              </Col>
              <Col xl={1}><FiDownload className="ReactIcon"/></Col>
            </Row>
          </Card>
        
        </Row>
      </Container>

        </div>
  )
}

export default Homework;