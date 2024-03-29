import React from "react";
import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="streamMovieProject">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
