import Card from "../../Card/Card";
import { Row, Col, Container } from "react-bootstrap";
import "../../../Styles/main.scss";
import PendingHomework from "./PendingHomework";
import MyRecentCourses from "./MyRecentCourses";

function Dashboard() {
  return (
    <div className="Dashboard">
      <Container>
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
          <div className="MyCoursesCardBackground">
            <MyRecentCourses> </MyRecentCourses>
            <MyRecentCourses></MyRecentCourses>
            <MyRecentCourses> </MyRecentCourses>
            <MyRecentCourses> </MyRecentCourses>
          </div>

          <h5>My Pending Homework</h5>
          <div className="PendingHomework">
            <Row>
              <PendingHomework> </PendingHomework>
              <PendingHomework> </PendingHomework>
              <PendingHomework> </PendingHomework>
            </Row>
           
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
}

export default Dashboard;
