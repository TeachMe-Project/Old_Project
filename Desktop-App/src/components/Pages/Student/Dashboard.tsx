import Card from "../../Card/Card";
import { Row, Col, Container } from "react-bootstrap";
import "../../../Assets/Styles/main.scss";
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
          <div className="PendingHomeworkBackground">
            <Row>
              <PendingHomework> </PendingHomework>
              <PendingHomework> </PendingHomework>
              <PendingHomework> </PendingHomework>
              <PendingHomework> </PendingHomework>
              <PendingHomework> </PendingHomework>
              <PendingHomework> </PendingHomework>
              <PendingHomework> </PendingHomework>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
