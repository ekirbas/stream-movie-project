import React from "react";
import { Logo, SearchIcon } from "../assets/images/SvgComponents";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBarZ-Index">
      <div className="navBar">
        <Logo />
        <ul className="navButtonsContainer">
          <li className="activeNavBarItem">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="">
            <Link to={"/movie-and-series"}>Movie & Shows</Link>
          </li>
          <li className="">
            <Link to={"/support"}>Support</Link>
          </li>
          <li className="">
            <Link to={"/subscriptions"}>Subscriptions</Link>
          </li>
        </ul>
        <SearchIcon />
      </div>
    </div>
  );
};

export default NavBar;
