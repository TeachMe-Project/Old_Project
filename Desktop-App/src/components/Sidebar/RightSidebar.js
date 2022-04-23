import React from "react";
import { CardGroup } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../Navbars/Navbar";
import Calendar from "../Calendars/Calendar";

export const RightSidebar = () => {
  return (
    <div className="RightSidebar">
      <Container>
        <Row>
          <Navbar></Navbar>
        </Row>
        <Row>
          <Calendar></Calendar>
        </Row>
        {/* <CardGroup>
            <Card>

            </Card>
            <Card>

</Card>
        </CardGroup> */}
      </Container>
    </div>
  );
};

export default RightSidebar;
