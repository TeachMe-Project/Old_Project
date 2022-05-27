import "./Assets/Styles/main.scss";
import LeftSidebar from "./components/Sidebar/LeftSidebar";
import MainPanel from "./components/Pages/Student/MainPanel";
import TopNavbar from "./components/Navbars/TopNavbar";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "./components/Button/Button";
import Home from "./components/Pages/Student/Home";
import Signup from "./components/Signup/Signup";


function App() {
  return (
    <Router>
       <div className="App">
      <MainPanel />
      {/* <Home /> */}
      </div> 
    </Router>
  );
}

export default App;
