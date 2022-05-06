import * as React from 'react';
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardDetails from "../../Card/CardDetails";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import PanelContainer from "../../Layout/PanelContainer";



export const MyCourses = () => {
  return (
    <div className="MyCourses">
      <Container>
        <Row>
        <PanelContainer />
        <div className="PanelHeader">
            <h2>My Courses</h2>
          </div>
          <div className="Panel">
          <div className="PanelBody">
          <Link to="/course" className="link">
            <Card>
              <div className="CardImg">
                <img src={require("../../../Assets/Images/testimg2.jpeg")} />
              </div>
              <div className="CardContent">
                <CardHeader>Mathematics class</CardHeader>
                <CardDetails>Mr. Lasitha Nuwan</CardDetails>
              </div>
            </Card>
            </Link>
              fefnekfnekjfnejkfnefknefjke
            </div>
            </div> 
      </Row>
      </Container>
    </div>
  );
};

export default MyCourses;
