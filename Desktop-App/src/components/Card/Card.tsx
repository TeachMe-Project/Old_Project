import * as React from "react";
import { CardDetails } from "./CardDetails";
import { CardHeader } from "./CardHeader";
import { CardButton } from "./CardButton";

type Card = {
  btnname?: string;
  date?: string;
  teacher?:string;
  time?:string;
  header?: string;
  icon?: any;
  // image?: HTMLImageElement;
};

export const Card: React.FC<Card> = (props) => {
  return (
    <div className="Card">
      <div className="CardImage">
        {/* {props.image} */}
        <img src={require("../../Assets/Images/testimg2.jpeg")} />
      </div>
      <div className="CardBody">
        <CardHeader header={props.header} />
        <CardDetails details={props.teacher} />
        <CardDetails details={props.time} />
        <CardDetails details={props.date} />
        <CardButton btnname={props.btnname} />
        {/* <CardButton icon={props.icon} /> */}
      </div>
    </div>
  );
};
export default Card;
