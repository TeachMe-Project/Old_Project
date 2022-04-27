import '../src/Assets/Styles/main.scss';
import LeftSidebar from '../src/Assets/components/Sidebar/LeftSidebar';
import RightSidebar from '../src/Assets/components/Sidebar/RightSidebar';
import MainPanel from '../src/Assets/components/Layout/StudentDashboard';
import { Row, Col } from 'react-bootstrap';


function App() {
  return (
    <div className="App">  
        <Row className="Page">
          <Col xl={2}><LeftSidebar/></Col>
          <Col xl={7}><MainPanel/></Col>
          <Col xl={3}><RightSidebar/></Col>
        </Row>
    </div>
  );
}

export default App;
