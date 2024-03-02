import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HamburgerMenuIcon from "../../assets/svgComp/HamburgerMenuIcon";
import SearchIcon from "../../assets/svgComp/SearchIcon";

const NavButtons = () => {
  const [pageWidth, setPageWidth] = useState<number>(outerWidth);
  const [activeHamburgerMenu, setActiveHamburgerMenu] =
    useState<boolean>(false);
  useEffect(() => {
    setPageWidth(outerWidth);
    setActiveHamburgerMenu(false);
  }, []);
  const urlPath = () => {
    const arr = useLocation().pathname.split("/");
    return arr[1];
  };
  const [navActive, setNavActive] = useState(urlPath());
  const handleNavBarActive = (val: string) => {
    setNavActive(val);
    setActiveHamburgerMenu(false);
  };
  const handleHamburgerMenu = () => {
    setActiveHamburgerMenu(!activeHamburgerMenu);
  };
  return (
    <>
      {pageWidth < 391 && (
        <div
          className={`hamburgerMenuIconContainer ${
            activeHamburgerMenu ? "activeHamburgerMenu" : ""
          }`}
          onClick={handleHamburgerMenu}
        >
          <HamburgerMenuIcon />
        </div>
      )}

      <ul
        className={`navButtonsContainer ${
          activeHamburgerMenu ? "activeNavButtons" : ""
        }`}
      >
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
            className={navActive === "subscriptions" ? "activeNavBarItem" : ""}
            onClick={() => handleNavBarActive("subscriptions")}
          >
            Subscriptions
          </Link>
        </li>
        {pageWidth < 391 && (
          <li>
            <SearchIcon className="mobileSearchIcon" />
          </li>
        )}
      </ul>
    </>
  );
};

export default NavButtons;
