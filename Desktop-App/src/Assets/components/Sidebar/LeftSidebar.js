import React from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillGridFill, BsFillBookFill } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { IoMdCog } from "react-icons/io";
import "../../Styles/main.scss";
import { Link } from "react-router-dom";
import "../../components/Pages/Student/MainPanel";

export const LeftSidebar = () => {
  return (
    <div className="LeftSidebar">
      <Container>
        <div className="Logo">Logo</div>
        <ul className="LeftNavbar">
          <Row>
            <li>
              <div className="Sidebar_item">
                <Link to="/">
                  <div>
                    <BsFillGridFill />
                    {/* Link to edit the vertical align of react icons
            https://github.com/react-icons/react-icons */}
                  </div>
                  <div className="Sidebar_item_name">Dashboard</div>
                </Link>
              </div>
            </li>
          </Row>

          <Row>
            <li>
              <div className="Sidebar_item">
                <Link to="/mycourses">
                  <div>
                    <BsFillBookFill />
                  </div>
                  <div className="Sidebar_item_name">My Courses</div>
                </Link>
              </div>
            </li>
          </Row>

          <Row>
            <li>
              <div className="Sidebar_item">
                <Link to="/myteachers">
                <div>
                  <GiTeacher />
                </div>
                <div className="Sidebar_item_name">My Teachers</div>
                </Link>
              </div>
            </li>
          </Row>

          <Row>
            <li>
              <div className="Sidebar_item">
                <Link to="/settings">
                <div>
                  {/* <IoMdCog.Provider value={{ style: { verticalAlign: 'middle' } }} /> */}
                  <IoMdCog />
                </div>
                <div className="Sidebar_item_name">Settings</div>
                </Link>
              </div>
            </li>
          </Row>
        </ul>
      </Container>
    </div>
  );
};

export default LeftSidebar;
