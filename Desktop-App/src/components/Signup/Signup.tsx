import * as React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import MainPanel from "../Pages/Student/MainPanel";

const Signup = () => {
  return (
    <div className="Signup">
      <div className="LeftTab">
        <img src={require("../../Assets/Images/testimg3.png")} />
        <div className="LeftTabHeader">Signup as a</div>
        <div className="SignupOptions">
          <Link to="/studentSignup" className="link">
            <Button name="Student" />
          </Link>
          <Link to="/teacherSignup" className="link">
            <Button name="Teacher" />
          </Link>
          <Link to="/instituteSignup" className="link">
            <Button name="Insitute" />
          </Link>
        </div>
        <div className="Description">
          Already have an account?
          <Link to="#">Log in</Link>
        </div>
      </div>

      
    </div>

    /* <Container>
      <Row>
        <Col md="6">
          <form>
            <p className="h4 text-center mb-4">Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Your name
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
              Confirm your email
            </label>
            <input
              type="email"
              id="defaultFormRegisterConfirmEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Your password
            </label>
            <input
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
            />
            <div className="text-center mt-4">
              {/* <MDBBtn color="unique" type="submit">
                Register
              </MDBBtn> 
            </div>
          </form>
        </Col>
      </Row>
    </Container> 
    </div>*/
  );
};

export default Signup;
