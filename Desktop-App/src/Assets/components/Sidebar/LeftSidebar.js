import React from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillGridFill, BsFillBookFill, } from "react-icons/bs";
import {GiTeacher} from "react-icons/gi"
import {IoMdCog} from "react-icons/io";
import "../../Styles/main.scss";
import {BrowserRouter as Router,Routes,Route,Link,useParams,useRouteMatch} from "react-router-dom";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.

export const LeftSidebar = () => {
  return (
    <div className="LeftSidebar">
      <Container>
        <div className="Logo">
          Logo
        </div>
        <ul className="LeftNavbar">
        <Row>
        <li>
          <div className="Sidebar_item">
          <Link to="/">
            <div>
            <BsFillGridFill/>
            {/* Link to edit the vertical align of react icons
            https://github.com/react-icons/react-icons */}
            </div>
            <div className="Sidebar_item_name">Dashboard
            </div>
            </Link>
            
          </div>
          </li>
        </Row>

        <Row>
        <li>
          <div className="Sidebar_item">
       
            <Link to="/mycourses">
            <div>
              <BsFillBookFill/>
           </div>
            <div className="Sidebar_item_name">My Courses
            </div>
            </Link>
            
          </div>
          </li> 
        </Row>

        <Row>
        <li>
          <div className="Sidebar_item">
          
            {/* <Link to="/myteachers"> */}
            <div>
            <GiTeacher/>
            </div>
            <div className="Sidebar_item_name">My Teachers
            </div>
            {/* </Link> */}
           
          </div>
          </li>
        </Row>

        <Row>
        <li>
          <div className="Sidebar_item">
          
            {/* <Link to="/settings"> */}
            <div>
           {/* <IoMdCog.Provider value={{ style: { verticalAlign: 'middle' } }} /> */}
           <IoMdCog /></div>
            <div className="Sidebar_item_name">Settings
            </div>
            {/* </Link> */}
           
          </div>
          </li>
        </Row>
        </ul>
      </Container>
     
    </div>
  );
}



export default LeftSidebar;
