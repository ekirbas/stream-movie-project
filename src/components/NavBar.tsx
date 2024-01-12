import React from "react";
import { Logo, SearchIcon } from "../assets/images/SvgComponents";

const NavBar = () => {
  return (
    <div className="navBar">
      <Logo />
      <ul className="navButtonsContainer">
        <li className="activeNavBarItem">Home</li>
        <li className="">Movie & Shows</li>
        <li className="">Support</li>
        <li>Subscriptions</li>
      </ul>
      <SearchIcon />
    </div>
  );
};

export default NavBar;
