import "./Assets/Styles/main.scss";
import LeftSidebar from "./Assets/components/Sidebar/LeftSidebar";
import RightSidebar from "./Assets/components/Sidebar/RightSidebar";
import MainPanel from "./Assets/components/Pages/Student/MainPanel";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="App">
      <Row className="Page">


      <Col xl={2}>
            <LeftSidebar />
          </Col>

          <Col xl={7}>
        <Routes>
        <Route exact path="/" element={<MainPanel/>} />
        <Route exact path="chat" element={<Chat />} />
        <Route exact path="*" element={ <div className="h-screen flex justify-center items-center">ERROR </div>}/>
        </Routes>
        </Col>


        <Col xl={3}>
            <RightSidebar />
          </Col>

          </Row>
        
      </div>
    </Router>
  );
}

export default App;
