import * as React from "react";
import Card from "../../Card/Card";
import { Row, Col, Container } from "react-bootstrap";
import "../../../Assets/Styles/main.scss";
import PendingHomework from "./PendingHomework";
// import MyRecentCourses from "./MyRecentCourses";
import TopNavbar from "../../Navbars/TopNavbar";
import LeftSidebar from "../../Sidebar/LeftSidebar";
import PanelContainer from "../../Layout/PanelContainer";



export const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Container>
        <Row>
          <PanelContainer />
          <div className="PanelHeader">
            <h2>Dashboard</h2>
          </div>
          <div className="Panel">
            <div className="PanelSubheader">
              <h5>Upcoming Classes</h5>
            </div>
            <div className="PanelBody">
              fefnekfnekjfnejkfnefknefjke
            </div>
          </div>

          <div className="Panel">
            <div className="PanelSubheader">
              <h5>Pending Homework</h5>
            </div>
            <div className="PanelBody">
              efknejkenfjkenfjefn
              <PendingHomework />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
