import * as React from "react";
import LeftSidebar from "../../Sidebar/LeftSidebar";
import MainPanel from "./MainPanel";
import TopNavbar from "../../Navbars/TopNavbar";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Signup from "../../Signup/Signup";
export const Home = () => {
  return (
    <div className="Home">
        <Signup ></Signup>
      {/* <Row>
        <TopNavbar></TopNavbar>
      </Row>
      <Row className="Page">
        <Col xl={2}>
          <LeftSidebar />
        </Col>
        <Col xl={10}>*/}
          <MainPanel />
        {/* </Col>
      </Row>  */}
    </div>
  );
};

export default Home;
