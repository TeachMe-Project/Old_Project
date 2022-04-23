import './App.css';
import LeftSidebar from './components/Sidebar/LeftSidebar';
import RightSidebar from './components/Sidebar/RightSidebar';

import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">  
    
        <Row>
          <Col xl={2}><LeftSidebar /></Col>
          <Col xl={7}></Col>
          <Col xl={3}><RightSidebar /></Col>
        </Row>
    </div>
  );
}

export default App;