import '../src/Assets/Styles/main.scss';
import LeftSidebar from '../src/Assets/components/Sidebar/LeftSidebar';
import RightSidebar from '../src/Assets/components/Sidebar/RightSidebar';
import MainPanel from '../src/Assets/components/Layout/MainPannel';
import { Row, Col } from 'react-bootstrap';
import {BrowserRouter as Router,Routes,Route,Link,useParams,useRouteMatch} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">  
        <Row className="Page">
          <Col xl={2}><LeftSidebar/></Col>
          <Col xl={7}><MainPanel/></Col>
          <Col xl={3}><RightSidebar/></Col>
        </Row>
    </div>
    </Router>
  );
}

export default App;
