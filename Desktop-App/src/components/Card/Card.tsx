import * as React from "react";

type Card = {
  btnname?: string;
  details?:  string;
  header?: string;

}


export const Card :React.FC<Card>= (props) => {
  return (
    <div className="Card">
          {props.header}{props.details}{props.btnname}
    </div>
  );
};
export default Card;
