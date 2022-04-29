import React from "react";
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardDetails from "../../Card/CardDetails";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MyCourses = () => {
  return (
    <div className="MyCourses">
      <Container>
        <div className="PanelHeader">
          <h2>My Courses</h2>
        </div>
        <div className="PanelContainer">
          <div className="MyCoursesCardBackground">
          <Link to="/course" className="link">
            <Card>
              <div className="CardImg">
                <img src={require("../../../Images/testimg2.jpeg")} />
              </div>
              <div className="CardContent">
                <CardHeader>Mathematics class</CardHeader>
           
                <CardDetails>Mr. Lasitha Nuwan</CardDetails>
              </div>
            </Card>
            </Link>
            <Card>
              <div className="CardImg">
                <img src={require("../../../Images/testimg2.jpeg")} />
              </div>
              <div className="CardContent">
                <CardHeader>Mathematics class</CardHeader>
                
                <CardDetails>Mr. Lasitha Nuwan</CardDetails>
              </div>
            </Card>
            <Card>
              <div className="CardImg">
                <img src={require("../../../Images/testimg2.jpeg")} />
              </div>
              <div className="CardContent">
                <CardHeader>Mathematics class</CardHeader>
               
                <CardDetails>Mr. Lasitha Nuwan</CardDetails>
              </div>
            </Card>
            <Card>
              <div className="CardImg">
                <img src={require("../../../Images/testimg2.jpeg")} />
              </div>
              <div className="CardContent">
                <CardHeader>Mathematics class</CardHeader>
               
                <CardDetails>Mr. Lasitha Nuwan</CardDetails>
              </div>
            </Card>
            <Card>
              <div className="CardImg">
                <img src={require("../../../Images/testimg2.jpeg")} />
              </div>
              <div className="CardContent">
                <CardHeader>Mathematics class</CardHeader>
               
                <CardDetails>Mr. Lasitha Nuwan</CardDetails>
              </div>
            </Card>
          </div>
        </div>

        {/* <Tabs>
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Crocodile">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs> */}
      </Container>
    </div>
  );
};

export default MyCourses;
