import React from "react";
import FacebookIcon from "../../assets/svgComp/FacebookIcon";
import TwitterIcon from "../../assets/svgComp/TwitterIcon";
import LinkedinIcon from "../../assets/svgComp/LinkedinIcon";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLinkContainer">
        <ul>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>Categories</span>
          </li>
          <li>
            <span>Devices</span>
          </li>
          <li>
            <span>Pricing</span>
          </li>
          <li>
            <span>FAQ</span>
          </li>
        </ul>
      </div>
      <div className="footerLinkContainer">
        <ul>
          <li>
            <span>Movies</span>
          </li>
          <li>
            <span>Genres</span>
          </li>
          <li>
            <span>Trendig</span>
          </li>
          <li>
            <span>New Release</span>
          </li>
          <li>
            <span>Popular</span>
          </li>
        </ul>
      </div>
      <div className="footerLinkContainer">
        <ul>
          <li>
            <span>Series</span>
          </li>
          <li>
            <span>Genres</span>
          </li>
          <li>
            <span>Trending</span>
          </li>
          <li>
            <span>New Release</span>
          </li>
          <li>
            <span>Popular</span>
          </li>
        </ul>
      </div>
      <div className="footerLinkContainer">
        <ul>
          <li>
            <span>Support</span>
          </li>
          <li>
            <span>Contact Us</span>
          </li>
        </ul>
      </div>
      <div className="footerLinkContainer">
        <ul>
          <li>
            <span>Subscription</span>
          </li>
          <li>
            <span>Contact Us</span>
          </li>
          <li>
            <span>Features</span>
          </li>
        </ul>
      </div>
      <div className="footerLinkContainer">
        <ul>
          <li>
            <span>Connect With Us</span>
          </li>
        </ul>
        <div className="connectIcons">
          <div className="iconDiv">
            <FacebookIcon />
          </div>
          <div className="iconDiv">
            <TwitterIcon />
          </div>
          <div className="iconDiv">
            <LinkedinIcon />
          </div>
        </div>
      </div>
      <div className="copyRContainer">
        <ul>
          <li>@2023 streamvib, All Rights Reserved</li>
          <li>
            <span>Terms of Use</span>
          </li>
          <li></li>
          <li>
            <span>Privacy Policy</span>
          </li>
          <li></li>
          <li>
            <span>Cookie Policy</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
