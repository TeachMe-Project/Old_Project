import React from "react";
import { CardGroup } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../Navbars/Navbar";
import CustomCalendar from "../Calendars/CustomCalendar";
import UpcomingCard from "../Card/UpcomingCard";

export const RightSidebar = () => {
  return (
    <div className="RightSidebar">
      <Container className="RightSidebarContainer">
        <Row>
          <Navbar></Navbar>
        </Row>
        <Row>
        <div className="CustomCalendar">
            <CustomCalendar/>
        </div>
        </Row>
        <Row>
        <div className="UpcomingClasses">
            <h6>Upcoming classes</h6>
            <UpcomingCard/>
            <UpcomingCard/>
            <UpcomingCard/>
            <UpcomingCard/>
        </div>
        </Row>
        
      </Container>
    </div>
  );
};

export default RightSidebar;
