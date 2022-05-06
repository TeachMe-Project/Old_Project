import * as React from 'react';
import Card from "../../Card/Card";
import { Row, Col, Container } from "react-bootstrap";
import "../../../Assets/Styles/main.scss";
// import PendingHomework from "./PendingHomework";
// import MyRecentCourses from "./MyRecentCourses";
import TopNavbar from "../../Navbars/TopNavbar";
import LeftSidebar from "../../Sidebar/LeftSidebar";
import PanelContainer from "../../Layout/PanelContainer";

function Dashboard() {
  return (
    <div className="Dashboard">
      <Container>
        <Row>
       <TopNavbar/>
       </Row>
       <Row>
         <Col xl={3}><LeftSidebar/></Col>
         <Col xl={9}><PanelContainer/></Col>
       </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
/*
<div className="PanelHeader">
<h2>Dashboard</h2>
</div>
<div className="PanelContainer">
<Card>
  Search bar
  <br />
  jkwnfkjenfejkfnejfnef\efjkenjkn
</Card>
<h5>My Recent Courses</h5>
{/* <div className="MyCoursesCardBackground">
  <MyRecentCourses> </MyRecentCourses>
 
</div> */

{/* <h5>My Pending Homework</h5>
<div className="PendingHomeworkBackground">
  <Row>
    <PendingHomework /> 
    
  </Row>
</div>
</div> */}
