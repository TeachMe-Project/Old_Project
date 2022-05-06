import * as React from 'react';
import '../src/Assets/Styles/main.scss';
import LeftSidebar from './components/Sidebar/LeftSidebar';
import RightSidebar from './components/Sidebar/RightSidebar';
import MainPanel from './components/Pages/Student/MainPanel';
import { Row, Col } from 'react-bootstrap';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">  
        <Row className="Page">
          <Col xl={3}><LeftSidebar/></Col>
          <Col xl={9}><MainPanel/></Col>
        </Row>
    </div>
     </Router>
  );
}

export default App;
