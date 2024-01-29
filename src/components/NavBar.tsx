import React, { useState } from "react";
import { Logo, SearchIcon } from "../assets/images/SvgComponents";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const urlPath = () => {
    const arr = useLocation().pathname.split("/");
    return arr[1];
  };
  const [navActive, setNavActive] = useState(urlPath());
  const handleNavBarActive = (val: string) => {
    setNavActive(val);
  };
  return (
    <div className="navBarZ-Index">
      <div className="navBar">
        <Logo />
        <ul className="navButtonsContainer">
          <li>
            <Link
              to={"/"}
              className={navActive === "" ? "activeNavBarItem" : ""}
              onClick={() => handleNavBarActive("/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/movie-and-series"}
              className={
                navActive === "movie-and-series" ? "activeNavBarItem" : ""
              }
              onClick={() => handleNavBarActive("movie-and-series")}
            >
              Movie & Shows
            </Link>
          </li>
          <li>
            <Link
              to={"/support"}
              className={navActive === "support" ? "activeNavBarItem" : ""}
              onClick={() => handleNavBarActive("support")}
            >
              Support
            </Link>
          </li>
          <li>
            <Link
              to={"/subscriptions"}
              className={
                navActive === "subscriptions" ? "activeNavBarItem" : ""
              }
              onClick={() => handleNavBarActive("subscriptions")}
            >
              Subscriptions
            </Link>
          </li>
        </ul>
        <SearchIcon />
      </div>
    </div>
  );
};

export default NavBar;
