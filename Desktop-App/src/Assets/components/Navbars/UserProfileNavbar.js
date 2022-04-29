import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const UserProfileNavbar = (props) => {
  return (
    <div className="UserProfileNavbar">
      <div className="UserProfileButton">
        <Link to="/userprofile" className="link">
          <div className="UserImg">
            <img src={require("../../Images/testimg2.jpeg")} />
          </div>
          <div className="Name"> {props.children}</div>
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
