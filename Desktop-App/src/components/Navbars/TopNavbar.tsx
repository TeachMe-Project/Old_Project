import * as React from "react";
import Logo from '../Logo/Logo';
import Searchbar from '../Searchbar/Searchbar';
import Profile from '../Profile/Profile';
import Signout from '../Signout/Signout';



export const TopNavbar = () => {
  return (
    <div className="TopNavbar">
        <Logo />
        <Searchbar />
        <Profile />
        <Signout />
    </div>
  )
}

export default TopNavbar;
