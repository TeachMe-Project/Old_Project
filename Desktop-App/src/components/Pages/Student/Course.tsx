import * as React from 'react';
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardDetails from "../../Card/CardDetails";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tabs from "../../Tabs/Tabs";
import Details from "./Details";
import Notes from "./Notes";
import Homework from "./Homework";
import PendingPayments from "./PendingPayments";


export const Course = () => {
  return (
    <div className="Course">
      <Container>
        <div className="PanelHeader">
          <h2>My Courses</h2>
        </div>
        <div className="PanelContainer">
          <div className="PanelSubHeader">
            <div className="PanelImg">
              <img src={require("../../../Assets/Images/testimg2.jpeg")} />
            </div>
            <h3>Mathematics Class</h3>
          </div>

          <Tabs>
            <div className="Details">
              <Details></Details>
            </div>
            <div className="Notes">
              <Notes></Notes>
              <Notes></Notes>
              <Notes></Notes>
              <Notes></Notes>
            </div>
            <div className="Homework">
              <Homework></Homework>
              <Homework></Homework>
              <Homework></Homework>
              <Homework></Homework>
              </div>
            <div className="Pending Payments">
              <PendingPayments></PendingPayments>
              <PendingPayments></PendingPayments>
              <PendingPayments></PendingPayments>
              <PendingPayments></PendingPayments>
            </div>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default Course;
