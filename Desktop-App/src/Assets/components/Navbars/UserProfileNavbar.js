import React from 'react'
import { BsFillBellFill } from "react-icons/bs";
import {Link} from "react-router-dom";

export const UserProfileNavbar = (props) => {
  return (
    <div className='UserProfileNavbar'>
        {/* <Link to ='#'> */}
        <div className="UserImg"> <img/></div>
        <div className="Name"> {props.children}</div>
        <div className="NotificationBell"> <BsFillBellFill className="Bell-icon" /></div>
        {/* </Link>  */}
        </div>
  )
}
export default UserProfileNavbar;