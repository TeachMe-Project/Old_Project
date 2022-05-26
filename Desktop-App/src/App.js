import "./Assets/Styles/main.scss";
import LeftSidebar from "./components/Sidebar/LeftSidebar";
import MainPanel from "./components/Pages/Student/MainPanel";
import TopNavbar from "./components/Navbars/TopNavbar";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Row>
          <TopNavbar></TopNavbar>
          </Row>
        <Row className="Page">
          <Col xl={2}>
            <LeftSidebar />
          </Col>
          <Col xl={9}>
            <MainPanel />
          </Col>
          
        </Row>
      </div>
    </Router>
  );
}

export default App;
