import * as React from "react";
import Card from "../../Card/Card";
import { Row, Col, Container } from "react-bootstrap";
import "../../../Assets/Styles/main.scss";
import PendingHomework from "./PendingHomework";
// import MyRecentCourses from "./MyRecentCourses";
import TopNavbar from "../../Navbars/TopNavbar";
import LeftSidebar from "../../Sidebar/LeftSidebar";
import PanelContainer from "../../Layout/PanelContainer";
import { AiOutlineHistory } from "react-icons/ai";

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
              <Card
                header="Mathematics"
                teacher="Mr. Lasitha Nuwan"
                time="04:00pm- 06:00pm"
                date="23-05-2022"
                btnname="Join"
              />
              <Card
                header="Mathematics"
                teacher="Mr. Lasitha Nuwan"
                time="04:00pm- 06:00pm"
                date="24-05-2022"
                btnname="Join"
                // image={require("../../Assets/Images/testimg2.jpeg")}
              />

              <Card
                header="Mathematics"
                teacher="Mr. Lasitha Nuwan"
                time="04:00pm- 06:00pm"
                date="25-05-2022"
                btnname="Join"
              />
            </div>
          </div>

          <div className="Panel">
            <div className="PanelSubheader">
              <h5>Pending Homework</h5>
            </div>
            <div className="PanelBody">
              {/* <PendingHomework /> */}

              {/* <Card
                header="Mathematics"
                teacher="Mr. Lasitha Nuwan"
                time= "04:00pm- 06:00pm"
                date= "23-05-2022"
                btnname="Join"
              /> */}

              <div className="PendingHomework">
                <Card
                  header="Mathematics class"
                  teacher="Mr. Lasitha Nuwan"
                  date="28-04-2022"
                  btnname="view"
                  // icon={AiOutlineHistory}
                />
               

            
              </div>
              
            </div>
          </div>
          
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
