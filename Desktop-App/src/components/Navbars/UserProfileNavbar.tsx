import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import { Link } from "react-router-dom";

type UserProfileNavbar={
  name: string;
}

export const UserProfileNavbar = (props) => {
  return (
    <div className="UserProfileNavbar">
      <div className="UserProfileButton">
        <Link to="/userprofile" className="link">
          <div className="UserImg">
            <img src={require("../../Assets/Images/testimg2.jpeg")} />
          </div>
          <div className="Name"> {props.name}</div>
        </Link>
      </div>
      <Link to="#">
        <div className="NotificationBell">
          <BsFillBellFill className="Bell-icon" />
        </div>
      </Link>
    </div>
  );
};
export default UserProfileNavbar;
