import './App.css';
import LeftSidebar from './components/Sidebar/LeftSidebar';
import RightSidebar from './components/Sidebar/RightSidebar';
import MainPanel from './components/Layout/MainPanel';
import { Row, Col } from 'react-bootstrap';


function App() {
  return (
    <div className="App">  
        <Row className="Page">
          <Col xl={2}><LeftSidebar /></Col>
          <Col xl={7}><MainPanel/></Col>
          <Col xl={3}><RightSidebar /></Col>
        </Row>
    </div>
  );
}

export default App;
