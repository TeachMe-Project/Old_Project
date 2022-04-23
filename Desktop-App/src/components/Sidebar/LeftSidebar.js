import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../App.css";


export const LeftSidebar = () => {
  return (
    <div className="LeftSidebar">
      <Container>
        <div className="Logo">
          Logo
        </div>
        <Row>
          <div className="Sidebar_item">
            <div>
            <i className="bi bi-folder-fill"></i></div>
            <div className="Sidebar_item_name">Dashboard
            </div>
          </div>
        </Row>

        <Row>
          <div className="Sidebar_item">
            <div>
            <i className="bi bi-folder-fill"></i></div>
            <div className="Sidebar_item_name">My classes
            </div>
          </div>
        </Row>

        <Row>
          <div className="Sidebar_item">
            <div>
            <i className="bi bi-folder-fill"></i></div>
            <div className="Sidebar_item_name">My Teachers
            </div>
          </div>
        </Row>

        <Row>
          <div className="Sidebar_item">
            <div>
            <i className="bi bi-folder-fill"></i></div>
            <div className="Sidebar_item_name">Settings
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LeftSidebar;
