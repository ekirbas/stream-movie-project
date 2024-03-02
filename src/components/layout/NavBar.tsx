import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/svgComp/Logo";
import SearchIcon from "../../assets/svgComp/SearchIcon";
import NavButtons from "./NavButtons";

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogo = () => {
    navigate("/");
  };
  return (
    <div className="navBarZ-Index">
      <div className="navBar">
        <Logo className="navLogo" onClick={handleLogo} />
        <NavButtons />
        <SearchIcon />
      </div>
    </div>
  );
};

export default NavBar;
