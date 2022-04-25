import React from "react";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardButton from "../Card/CardButton";
import CardDetails from "../Card/CardDetails";

import { Container, Row, Col, Button, Img } from "react-bootstrap";

export const UpcomingCard = () => {
  return (
    <div className="UpcomingCard">
      <Card>
        {/* <CardImg></CardImg> */}
        <CardHeader>History Class</CardHeader>
        <CardDetails>Mr. Kamal Maggona</CardDetails>
        <div class="CardDetailsRow">
          <CardDetails>26th April, 2022</CardDetails>
          <CardDetails>|</CardDetails>
          <CardDetails>04:00pm - 06:00pm</CardDetails>
        </div>
        <div className="UpcomingCardBtn">
        <CardButton>Join Class</CardButton>
        </div>
      </Card>
    </div>
  );
};
export default UpcomingCard;
