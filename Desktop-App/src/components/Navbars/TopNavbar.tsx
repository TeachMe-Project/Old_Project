import * as React from "react";
import Logo from '../Logo/Logo';
import Searchbar from '../Searchbar/Searchbar';
import Profile from '../Profile/Profile';
import Signout from '../Signout/Signout';
import { Row, Col, Container } from "react-bootstrap";


export const TopNavbar = () => {
  return (
    <div className="TopNavbar">

      <Col xl={2}><Logo /></Col>
      <Col xl={5}><Searchbar /></Col>
      <Col xl={3}><Profile /></Col>
      <Col xl={2}><Signout /></Col>

    </div>
  )
}

export default TopNavbar;
