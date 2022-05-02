import React from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import CardButton from "./CardButton";
import CardDetails from "./CardDetails";

export const UpcomingCard = () => {
  return (
    <div className="UpcomingCard">
      <Card>
        <CardHeader>History Class</CardHeader>
        <CardDetails>Mr. Kamal Maggona</CardDetails>
        <div className="CardDetailsRow">
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
