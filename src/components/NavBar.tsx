import React from "react";
import { Logo, SearchIcon } from "../assets/images/SvgComponents";

const NavBar = () => {
  return (
    <div className="navBarZ-Index">
      <div className="navBar">
        <Logo />
        <ul className="navButtonsContainer">
          <li className="activeNavBarItem">Home</li>
          <li className="">Movie & Shows</li>
          <li className="">Support</li>
          <li className="">Subscriptions</li>
        </ul>
        <SearchIcon />
      </div>
    </div>
  );
};

export default NavBar;
